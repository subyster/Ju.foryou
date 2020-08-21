import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../services/api';

import { Container, Content, SideMenu, Page } from './styles';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ItemCard, { Item } from '../../../components/ItemCard';

const ManagerPage: React.FC = () => {
  const [items, setItems] = useState([]);

  const loadItems = useCallback(async () => {
    api.get('/items').then(response => {
      setItems(response.data);
    });
  }, []);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  return (
    <Container>
      <Header />

      <Content>
        <SideMenu>
          <ul>
            <button type="button">Todos os items</button>
            <button type="button">Items pendentes</button>
            <button type="button">Items à venda</button>
            <button type="button">Items vendidos</button>
            <button type="button">Clientes</button>
            <Link to="/manager/categories">Categorias</Link>
          </ul>
        </SideMenu>

        <Page>
          {items.map((item: Item) => {
            return (
              <ItemCard key={item.id} item={item}>
                <div>
                  <img src={item.user.avatar_url} alt={item.user.name} />
                  <span>
                    {item.user.name} {item.user.surname}
                  </span>
                </div>
              </ItemCard>
            );
          })}
        </Page>
      </Content>

      <Footer />
    </Container>
  );
};

export default ManagerPage;
