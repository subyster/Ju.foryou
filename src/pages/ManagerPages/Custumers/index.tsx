import React, { useState, useEffect } from 'react';
import api from '../../../services/api';

import { Container, Content, Page } from './styles';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ManagerMenu from '../../../components/ManagerMenu';

import blankAvatar from '../../../assets/blank-avatar.svg';

interface CustumersProps {
  id: string;
  name: string;
  surname: string;
  avatar_url: string;
}

const Custumers: React.FC = () => {
  const [custumers, setCustumers] = useState<CustumersProps[]>([]);

  useEffect(() => {
    api.get<CustumersProps[]>('/users').then(response => {
      setCustumers(response.data);
    });
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        <ManagerMenu />

        <Page>
          <h1>Nossos clientes</h1>
          {custumers.map(custumer => (
            <div key={custumer.id}>
              <img
                src={custumer.avatar_url ? custumer.avatar_url : blankAvatar}
                alt={custumer.name}
              />
              <span>
                {custumer.name} {custumer.surname}
              </span>
            </div>
          ))}
        </Page>
      </Content>

      <Footer />
    </Container>
  );
};

export default Custumers;
