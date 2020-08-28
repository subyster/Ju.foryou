/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import { FiMail, FiPhone } from 'react-icons/fi';
import { Container, FooterContent, FooterText, Social } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <FooterContent>
        <FooterText>
          Ficou com alguma dúvida? Entre em contato com a gente:
        </FooterText>
        <Social>
          <div>
            <FiMail />
            <p>contato@smanager.com.br</p>
          </div>

          <div>
            <FiPhone />
            <p>(99) 99999-9999</p>
          </div>
        </Social>
      </FooterContent>
    </Container>
  );
};

export default Footer;
