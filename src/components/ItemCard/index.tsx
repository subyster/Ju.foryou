import React from 'react';

import {
  FiInstagram,
  FiEdit,
  FiCheckCircle,
  FiAlertTriangle,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { ItemCardContent, Container, Info, Status, Buttons } from './styles';
import formatValue from '../../utils/formatValue';

export interface Item {
  id: string;
  user_id: string;
  user: {
    name: string;
    surname: string;
    avatar_url: string;
    email: string;
  };
  name: string;
  category_name: string;
  instagram_url: string;
  price: number;
  size: string;
  avatar_url: string;
  status: 'sold' | 'available' | 'pendent';
}

interface ItemCardProps {
  item: Item;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, children }) => {
  return (
    <ItemCardContent>
      {children}
      <Container>
        <img src={item.avatar_url} alt={item.name} />
        <Info>
          <span>{item.name}</span>
          <strong>{formatValue(item.price)}</strong>
          {item.status === 'available' && (
            <Status>
              <span style={{ color: 'var(--dark-purple-ju)' }}>À venda</span>
              <Buttons>
                <Link
                  to={
                    item.instagram_url
                      ? item.instagram_url
                      : 'https://www.instagram.com/ju.foryou/'
                  }
                >
                  <FiInstagram size={28} color="var(--dark-purple-ju)" />
                </Link>
                <Link to={`/item/${item.id}`}>
                  <FiEdit
                    size={28}
                    color="var(--dark-purple-ju)"
                    style={{ marginLeft: 16 }}
                  />
                </Link>
              </Buttons>
            </Status>
          )}
          {item.status === 'sold' && (
            <Status>
              <span style={{ color: 'var(--green)' }}>Vendido!</span>
              <Buttons>
                <FiCheckCircle size={28} color="var(--green)" />
                <Link to={`/item/${item.id}`}>
                  <FiEdit
                    size={28}
                    color="var(--green)"
                    style={{ marginLeft: 16 }}
                  />
                </Link>
              </Buttons>
            </Status>
          )}
          {item.status === 'pendent' && (
            <Status>
              <span style={{ color: 'var(--red)' }}>Pendente</span>
              <Buttons>
                <FiAlertTriangle size={28} color="var(--red)" />
                <Link to={`/item/${item.id}`}>
                  <FiEdit
                    size={28}
                    color="var(--red)"
                    style={{ marginLeft: 16 }}
                  />
                </Link>
              </Buttons>
            </Status>
          )}
        </Info>
      </Container>
    </ItemCardContent>
  );
};

export default ItemCard;
