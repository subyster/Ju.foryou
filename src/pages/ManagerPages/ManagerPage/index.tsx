import React, { useState, useCallback, useEffect } from 'react';
import api from '../../../services/api';

import { Container, Content, Page } from './styles';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ItemCard, { Item } from '../../../components/ItemCard';
import ManagerMenu from '../../../components/ManagerMenu';

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
        <ManagerMenu />

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
