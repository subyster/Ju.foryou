import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

import { Container } from './styles';

interface ManagerMenuProps {
  activePage?: string;
}

const ManagerMenu: React.FC<ManagerMenuProps> = ({ activePage }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenu(!mobileMenu);
  }, [mobileMenu]);

  return (
    <Container>
      <div>
        <button type="button" onClick={toggleMobileMenu}>
          <FiMenu />
          <span>Menu do Gerente</span>
        </button>
        {mobileMenu && (
          <nav>
            <Link to="/manager">Todos os items</Link>
            <Link to="/manager/pendent-items">Items pendentes</Link>
            <Link to="/manager/available-items">Items à venda</Link>
            <Link to="/manager/sold-items">Items vendidos</Link>
            <Link to="/manager/custumers">Clientes</Link>
            <Link to="/manager/categories">Categorias</Link>
          </nav>
        )}
      </div>

      <ul>
        <Link to="/manager">Todos os items</Link>
        <Link to="/manager/pendent-items">Items pendentes</Link>
        <Link to="/manager/available-items">Items à venda</Link>
        <Link to="/manager/sold-items">Items vendidos</Link>
        <Link to="/manager/custumers">Clientes</Link>
        <Link to="/manager/categories">Categorias</Link>
      </ul>
    </Container>
  );
};

export default ManagerMenu;
