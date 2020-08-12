import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiMail } from 'react-icons/fi';

import { Container, Menu, Social, HeaderContent } from './styles';

interface HeaderProps {
  isHome?: boolean;
  isSignIn?: boolean;
}

const Header: React.FC<HeaderProps> = ({ isHome, isSignIn, children }) => {
  return (
    <Container>
      <HeaderContent>
        <Link to="/">
          <h1>Ju.foryou</h1>
        </Link>

        <Menu>
          {!isHome && <Link to="/">Home</Link>}
          {!isSignIn && <Link to="/signin">Login</Link>}

          <Social>
            <a href="/">
              <FiFacebook />
            </a>
            <a href="/">
              <FiInstagram />
            </a>
            <a href="/">
              <FiMail />
            </a>
          </Social>
        </Menu>
      </HeaderContent>
      {children}
    </Container>
  );
};

export default Header;
