import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  ChangeEvent,
} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiTrash2, FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import {
  Container,
  Title,
  Content,
  FormInputs,
  Inputs,
  Photos,
} from './styles';

import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TextInput from '../../components/TextInput';
import Select from '../../components/Select';
import { Item } from '../../components/ItemCard';
import { User } from '../../hooks/auth';

interface CategoryProps {
  name: string;
}

interface EditItemFormData {
  name: string;
  status: string;
  category_name: string;
  instagram_url: string;
  size: string;
  price: number;
}

const EditItem: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { item_id } = useParams();
  const { addToast } = useToast();
  const history = useHistory();

  const [item, setItem] = useState<Item>({} as Item);
  const [user, setUser] = useState<User>({} as User);

  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('0');

  useEffect(() => {
    api.get(`/items/show/${item_id}`).then(response => {
      setItem(response.data);
    });
  }, [item_id]);

  useEffect(() => {
    api.get(`/profile/${item.user_id}`).then(response => {
      setUser(response.data);
    });
  }, [item.user_id]);

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
    async (data: EditItemFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Insira o nome do produto'),
          instagram_url: Yup.string().required(
            'Insira o link do post no Instagram',
          ),
          category_name: Yup.string().required('Escolha o nome da categoria'),
          status: Yup.string().required('Escolha o status do item'),
          size: Yup.string().required('Coloque o tamanho da peça ou produto'),
          price: Yup.number().typeError('Apenas números do valor em reais'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.put(`/items/${item.id}`, data);

        history.goBack();

        addToast({
          type: 'success',
          title: 'Item atualizado com sucesso!',
          description: 'O item teve suas informações atualizadas',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na atualização do item',
          description:
            'Ocorreu ao atualizar o item, cheque os campos e tente novamente.',
        });
      }
    },
    [addToast, history, item.id],
  );

  return (
    <Container>
      <Header />

      <Title>
        <header>
          <h1>EDITAR ITEM</h1>
        </header>
        <section>
          <button type="button">
            <FiArrowLeft size={24} />
            Voltar
          </button>

          <span>
            de <img src={user.avatar_url} alt={user.name} /> {user.name}{' '}
            {user.surname}
          </span>

          <button type="button" id="delete">
            <FiTrash2 size={24} />
            Excluir item
          </button>
        </section>
      </Title>
      <Form
        ref={formRef}
        initialData={{
          name: item.name,
          instagram_url: item.instagram_url,
          size: item.size,
          price: item.price,
          status: item.status,
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        onSubmit={handleSubmit}
      >
        <Content>
          <FormInputs>
            <Inputs>
              <TextInput name="name" title="Nome do produto" />
              <TextInput name="instagram_url" title="Link do Instagram" />
              <Select
                name="category_name"
                title="Categoria"
                value={selectedCategory}
                onChange={handleSelectedCategory}
              >
                <option value={item.category_name}>{item.category_name}</option>
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </Select>
            </Inputs>

            <Inputs>
              <Select name="status" title="Status do Item">
                <option value={item.status}> </option>
                <option value="pendent">Pendente</option>
                <option value="available">Disponível</option>
                <option value="sold">Vendido</option>
              </Select>
              <TextInput name="size" title="Tamanho" />
              <TextInput name="price" title="Valor Sugerido (R$)" />
            </Inputs>
          </FormInputs>

          <Photos>
            <img src={item.avatar_url} alt={item.name} />
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

export default EditItem;
