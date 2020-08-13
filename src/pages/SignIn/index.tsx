import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container, Content, FormTitle, InputBlock, Actions } from './styles';
import TextInput from '../../components/TextInput';

const SignIn: React.FC = () => {
  function handleSubmit(): void {}

  return (
    <Container>
      <Header isSignIn />

      <Content>
        <Form onSubmit={handleSubmit}>
          <FormTitle>Fazer login</FormTitle>

          <InputBlock>
            <TextInput name="email" icon={FiMail} title="E-mail" />
            <TextInput
              name="password"
              icon={FiLock}
              type="password"
              title="Senha"
            />
          </InputBlock>

          <button type="submit">Entrar</button>
        </Form>

        <Actions>
          <Link to="/">Esqueci minha senha</Link>

          <Link to="/signup">
            <FiLogIn size={18} />
            Criar conta
          </Link>
        </Actions>
      </Content>

      <Footer />
    </Container>
  );
};

export default SignIn;
