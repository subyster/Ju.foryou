import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  ChangeEvent,
} from 'react';
import { useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import api from '../../services/api';

import {
  Container,
  Title,
  Content,
  Inputs,
  Photos,
  MorePhotos,
} from './styles';

import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TextInput from '../../components/TextInput';
import Select from '../../components/Select';
import Dropzone from '../../components/Dropzone';

interface CategoryProps {
  name: string;
}

interface NewItemFormData {
  name: string;
  category_name: string;
  size: string;
  price: number;
}

const NewItem: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('0');
  const [selectedFile, setSelectedFile] = useState<File>();

  useEffect(() => {
    api.get<CategoryProps[]>('/categories').then(response => {
      const categoriesNames = response.data.map(category => category.name);

      setCategories(categoriesNames.sort());
    });
  }, []);

  const handleSelectedCategory = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const category = e.target.value;

      setSelectedCategory(category);
    },
    [],
  );

  const handleSubmit = useCallback(
    async (data: NewItemFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Insira o nome do produto'),
          category_name: Yup.string().required('Escolha o nome da categoria'),
          size: Yup.string().required('Coloque o tamanho da peça ou produto'),
          price: Yup.number().typeError('Apenas números do valor em reais'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { name, category_name, size, price } = data;

        const formData = new FormData();

        formData.append('name', name);
        formData.append('category_name', category_name);
        formData.append('size', size);
        formData.append('price', String(price));

        if (selectedFile) {
          formData.append('avatar', selectedFile);
        }

        await api.post('/items', formData);

        history.push('/dashboard');

        addToast({
          type: 'success',
          title: 'Item adicionado com sucesso!',
          description: 'Seu item foi enviado para a avaliação',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na criação do item',
          description:
            'Ocorreu ao criar novo item, cheque os campos e tente novamente.',
        });
      }
    },
    [addToast, selectedFile, history],
  );

  return (
    <Container>
      <Header />

      <Title>
        <h1>NOVO ITEM</h1>
        <span>*Campos obrigatórios</span>
      </Title>
      <Form
        ref={formRef}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        onSubmit={handleSubmit}
      >
        <Content>
          <Inputs>
            <TextInput name="name" title="Nome do produto*" />
            <Select
              name="category_name"
              title="Categoria*"
              value={selectedCategory}
              onChange={handleSelectedCategory}
            >
              <option value="0">Selecione uma categoria</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Select>
            <TextInput name="size" title="Tamanho" />
            <TextInput name="price" title="Valor Sugerido (R$)" />
          </Inputs>
          <Photos>
            <Dropzone onFileUpload={setSelectedFile} />
            <MorePhotos>
              <div>
                <strong>+</strong>
              </div>
            </MorePhotos>
          </Photos>
        </Content>
        <button type="submit" id="submitButton">
          Enviar novo item para avaliação
        </button>
      </Form>

      <Footer />
    </Container>
  );
};

export default NewItem;
