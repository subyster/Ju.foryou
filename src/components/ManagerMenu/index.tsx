import React, { useState, useCallback, HTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

import { Container } from './styles';

interface ManagerMenuProps extends HTMLAttributes<HTMLDivElement> {
  activePage?: string;
}

const ManagerMenu: React.FC<ManagerMenuProps> = ({ activePage, ...rest }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenu(!mobileMenu);
  }, [mobileMenu]);

  return (
    <Container {...rest}>
      <div>
        <button type="button" onClick={toggleMobileMenu}>
          <FiMenu />
          <span>Menu do Gerente</span>
        </button>
        {mobileMenu && (
          <nav>
            <Link to="/manager">Todos os itens</Link>
            <Link to="/manager/pendent-items">Itens pendentes</Link>
            <Link to="/manager/available-items">Itens à venda</Link>
            <Link to="/manager/sold-items">Itens vendidos</Link>
            <Link to="/manager/custumers">Clientes</Link>
            <Link to="/manager/categories">Categorias</Link>
          </nav>
        )}
      </div>

      <ul>
        <Link to="/manager">Todos os itens</Link>
        <Link to="/manager/pendent-items">Itens pendentes</Link>
        <Link to="/manager/available-items">Itens à venda</Link>
        <Link to="/manager/sold-items">Itens vendidos</Link>
        <Link to="/manager/custumers">Clientes</Link>
        <Link to="/manager/categories">Categorias</Link>
      </ul>
    </Container>
  );
};

export default ManagerMenu;
