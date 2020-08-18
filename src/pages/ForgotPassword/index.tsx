import React, { useRef, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiLogIn, FiMail } from 'react-icons/fi';

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
import api from '../../services/api';

interface ForgotPasswordFormData {
  email: string;
}

const ForgotPassword: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        setLoading(true);

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um E-mail válido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/password/forgot', {
          email: data.email,
        });

        addToast({
          type: 'success',
          title: 'E-mail de recuperação enviado!',
          description:
            'Cheque sua caixa de entrada e siga as instruções para recuperar sua senha no Ju.foryou',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na recuperação de senha',
          description:
            'Ocorreu um erro ao tentar realizar a recuperação da senha, tente novamente',
        });
      } finally {
        setLoading(false);
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Header isSignIn />

      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <FormTitle>Recuperar senha</FormTitle>

            <InputBlock>
              <TextInput name="email" icon={FiMail} title="E-mail cadastrado" />
            </InputBlock>

            <button type="submit">
              {loading ? (
                <p>Carregando...</p>
              ) : (
                <p>Enviar e-mail de recuperação</p>
              )}
            </button>
          </Form>

          <Actions>
            <Link to="/signin">
              <FiLogIn size={18} />
              Voltar ao Login
            </Link>
          </Actions>
        </AnimationContainer>
      </Content>

      <Footer />
    </Container>
  );
};

export default ForgotPassword;
