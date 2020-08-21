import React from 'react';

import {
  FiInstagram,
  FiEdit,
  FiCheckCircle,
  FiAlertTriangle,
} from 'react-icons/fi';
import { Container, Info, Status, Buttons } from './styles';
import { User } from '../../hooks/auth';
import formatValue from '../../utils/formatValue';

export interface Item {
  id: string;
  user: User;
  name: string;
  category_name: string;
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
    <Container>
      {children}
      <img src={item.avatar_url} alt={item.name} />
      <Info>
        <span>{item.name}</span>
        <strong>{formatValue(item.price)}</strong>
        {item.status === 'available' && (
          <Status>
            <span style={{ color: 'var(--dark-purple-ju)' }}>À venda</span>
            <Buttons>
              <FiInstagram size={28} color="var(--dark-purple-ju)" />
              <FiEdit
                size={28}
                color="var(--dark-purple-ju)"
                style={{ marginLeft: 16 }}
              />
            </Buttons>
          </Status>
        )}
        {item.status === 'sold' && (
          <Status>
            <span style={{ color: 'var(--green)' }}>Vendido!</span>
            <Buttons>
              <FiCheckCircle size={28} color="var(--green)" />
              <FiEdit
                size={28}
                color="var(--green)"
                style={{ marginLeft: 16 }}
              />
            </Buttons>
          </Status>
        )}
        {item.status === 'pendent' && (
          <Status>
            <span style={{ color: 'var(--red)' }}>Pendente</span>
            <Buttons>
              <FiAlertTriangle size={28} color="var(--red)" />
              <FiEdit size={28} color="var(--red)" style={{ marginLeft: 16 }} />
            </Buttons>
          </Status>
        )}
      </Info>
    </Container>
  );
};

export default ItemCard;
