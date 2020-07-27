import React from 'react';
import { Link } from 'react-router-dom';
import { FiTwitter, FiFacebook, FiInstagram, FiMail } from 'react-icons/fi';

import { Container, Menu, Social, HeaderContent } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderContent>
        <Link to="/">
          <h1>Ju.foryou</h1>
        </Link>

        <Menu>
          <Link to="/">Home</Link>
          <Link to="/">Contato</Link>
          <Link to="/">Login</Link>
        </Menu>

        <Social>
          <a href="/">
            <FiTwitter />
          </a>
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
      </HeaderContent>
    </Container>
  );
};

export default Header;
