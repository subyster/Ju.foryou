import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface ManagerMenuProps {
  activePage?: string;
}

const ManagerMenu: React.FC<ManagerMenuProps> = ({ activePage }) => {
  return (
    <Container>
      <ul>
        <Link to="/manager">Todos os items</Link>
        <Link to="/manager">Items pendentes</Link>
        <Link to="/manager">Items à venda</Link>
        <Link to="/manager">Items vendidos</Link>
        <Link to="/manager/custumers">Clientes</Link>
        <Link to="/manager/categories">Categorias</Link>
      </ul>
    </Container>
  );
};

export default ManagerMenu;
