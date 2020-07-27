import React from 'react';

import {
  FiInstagram,
  FiEdit,
  FiCheckCircle,
  FiAlertTriangle,
} from 'react-icons/fi';
import { Container, Info, Status, Buttons } from './styles';

interface ItemCardProps {
  image: string;
  name: string;
  value: string;
  status: 'sold' | 'available' | 'pendent';
}

const ItemCard: React.FC<ItemCardProps> = ({ image, name, value, status }) => {
  return (
    <Container>
      <img src={image} alt="imagem" />
      <Info>
        <span>{name}</span>
        <strong>{value}</strong>
        {status === 'available' && (
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
        {status === 'sold' && (
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
        {status === 'pendent' && (
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
