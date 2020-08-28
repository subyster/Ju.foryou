import React, { useState, useEffect, useCallback } from 'react';
import { FiArrowLeft, FiHome, FiPhone, FiMail } from 'react-icons/fi';
import { useHistory, useParams } from 'react-router-dom';
import api from '../../../services/api';

import { Container, Content, Page, CustumerInfo } from './styles';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ManagerMenu from '../../../components/ManagerMenu';
import ItemCard, { Item } from '../../../components/ItemCard';

import blankAvatar from '../../../assets/blank-avatar.svg';
import { User } from '../../../hooks/auth';

const CustumerDetails: React.FC = () => {
  const history = useHistory();
  const { custumer_id } = useParams();

  const [custumer, setCustumer] = useState<User>({} as User);
  const [items, setItems] = useState<Item[]>([]);

  const loadItems = useCallback(async () => {
    api.get(`/items/${custumer_id}`).then(response => {
      setItems(response.data);
    });
  }, [custumer_id]);

  useEffect(() => {
    api.get<User>(`/profile/${custumer_id}`).then(response => {
      setCustumer(response.data);
    });
  }, [custumer_id]);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  const handleGoBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <Container>
      <Header />

      <Content>
        <ManagerMenu />

        <Page>
          <button type="button" onClick={handleGoBack}>
            <FiArrowLeft size={28} />
            Voltar
          </button>

          <CustumerInfo>
            <div>
              <img
                src={custumer.avatar_url ? custumer.avatar_url : blankAvatar}
                alt={custumer.name}
              />
              <span>
                {custumer.name} {custumer.surname}
              </span>
            </div>
            <section>
              <p>
                <FiHome size={16} />
                Endereço: {custumer.address}, {custumer.neighborhood}.{' '}
                {custumer.city} - {custumer.uf}
              </p>
              <p>
                <FiPhone size={16} />
                Fone: {custumer.phone}
              </p>
              <p>
                <FiMail size={16} />
                E-mail: {custumer.email}
              </p>
            </section>
          </CustumerInfo>

          <h1>Itens:</h1>

          <div id="scroll">
            {items.length === 0 && (
              <h2>Este cliente não tem nenhum item cadastrado.</h2>
            )}
            {items.map((item: Item) => {
              return <ItemCard key={item.id} item={item} />;
            })}
          </div>
        </Page>
      </Content>

      <Footer />
    </Container>
  );
};

export default CustumerDetails;
