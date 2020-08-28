/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

import { FiMail, FiInstagram } from 'react-icons/fi';
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
            <FiMail size={32} color="var(--dark-primary)" />
            <p>contato@juforyou.com.br</p>
          </div>

          <a
            href="https://www.instagram.com/ju.foryou/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram size={32} color="var(--dark-primary)" />
            <p>@ju.foryou</p>
          </a>
        </Social>
      </FooterContent>
    </Container>
  );
};

export default Footer;
