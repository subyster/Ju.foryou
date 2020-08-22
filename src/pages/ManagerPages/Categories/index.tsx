import React, { useState, useEffect, useCallback, useRef } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import api from '../../../services/api';

import { Container, Content, Page } from './styles';

import getValidationErrors from '../../../utils/getValidationErrors';
import { useToast } from '../../../hooks/toast';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ManagerMenu from '../../../components/ManagerMenu';
import TextInput from '../../../components/TextInput';

interface CategoryProps {
  id: string;
  name: string;
}

interface AddCategoryFormData {
  name: string;
}

const Categories: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  const [categories, setCategories] = useState<CategoryProps[]>([]);
  const [addCategory, setAddCategory] = useState(false);

  function loadCategories(): void {
    api.get<CategoryProps[]>('/categories').then(response => {
      setCategories(response.data);
    });
  }

  useEffect(() => {
    loadCategories();
  }, []);

  function handleOpenAddCategory(): void {
    setAddCategory(true);
  }

  const handleSubmit = useCallback(
    async (data: AddCategoryFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Digite uma categoria inexistente'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        api.post('/categories', data);

        setAddCategory(false);

        loadCategories();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na criação de categoria',
          description: 'Verifique se o nome é único e tente novamente.',
        });
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Header />

      <Content>
        <ManagerMenu />

        <Page>
          {addCategory && (
            <Form ref={formRef} onSubmit={handleSubmit} id="addCategory">
              <TextInput name="name" title="Nome da categoria" />
              <button type="submit">+ Adicionar Categoria</button>
            </Form>
          )}
          {!addCategory && (
            <button type="button" onClick={handleOpenAddCategory}>
              + Adicionar Categoria
            </button>
          )}
          {categories.map(category => (
            <section key={category.id}>
              <span>{category.name}</span>
              <FiTrash2 size={28} />
            </section>
          ))}
        </Page>
      </Content>

      <Footer />
    </Container>
  );
};

export default Categories;
