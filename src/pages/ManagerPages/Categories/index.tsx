import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import api from '../../../services/api';

import { Container, Content, SideMenu, Page } from './styles';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

interface CategoryProps {
  id: string;
  name: string;
}

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  useEffect(() => {
    api.get<CategoryProps[]>('/categories').then(response => {
      // const categoriesNames = response.data.map(category => category.name);

      setCategories(response.data);
    });
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        <SideMenu>
          <ul>
            <Link to="/manager">Todos os items</Link>
            <button type="button">Items pendentes</button>
            <button type="button">Items à venda</button>
            <button type="button">Items vendidos</button>
            <button type="button">Clientes</button>
            <button type="button">Categorias</button>
          </ul>
        </SideMenu>

        <Page>
          <button type="button">+ Adicionar Categoria</button>
          {categories.map(category => (
            <div key={category.id}>
              <span>{category.name}</span>
              <FiTrash2 size={28} />
            </div>
          ))}
        </Page>
      </Content>

      <Footer />
    </Container>
  );
};

export default Categories;
