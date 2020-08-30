import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Content, AboutUs, ToSignUp } from './styles';

const scrollThreshold = 60;

const Home: React.FC = () => {
  const { user } = useAuth();

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function onScroll(): void {
      setScrollY(window.scrollY);
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const classes = [scrollY >= scrollThreshold ? 'signUpShow' : ''];

  const className = classes.join(' ').trim();

  return (
    <Container>
      <Header isHome />

      <Content>
        <AboutUs>
          <div>
            <h2>Bem vindo,</h2>
            <p>
              Aqui no SManager você pode anunciar os produtos que não quer mais,
              desapegar, e enquanto seu produto não é vendido, acompanhe todo o
              processo.
            </p>
          </div>
        </AboutUs>
        {!user && (
          <ToSignUp className={className}>
            <h1>Quer anunciar com a gente?</h1>
            <Link to="/signup">Faça seu cadastro</Link>
          </ToSignUp>
        )}
        {user && (
          <ToSignUp className={className}>
            <h1>Desapegue do que não precisa mais</h1>
            <Link to="/signup">Anunciar um produto</Link>
          </ToSignUp>
        )}
      </Content>

      <Footer />
    </Container>
  );
};

export default Home;
