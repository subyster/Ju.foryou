import React, { useRef, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TextInput from '../../components/TextInput';

import {
  Container,
  Content,
  AnimationContainer,
  FormTitle,
  InputBlock,
  Actions,
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um E-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description:
            'Ocorreu um erro ao fazer login, cheque suas credenciais.',
        });
      }
    },
    [signIn, addToast, history],
  );

  return (
    <Container>
      <Header isSignIn />

      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <FormTitle>Faça seu login</FormTitle>

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
        </AnimationContainer>
      </Content>

      <Footer />
    </Container>
  );
};

export default SignIn;
