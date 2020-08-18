/* eslint-disable camelcase */
import React, { useRef, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FiLock } from 'react-icons/fi';

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
} from './styles';
import api from '../../services/api';

interface ResetPasswordFormData {
  password: string;
  confirm_password: string;
}

const ResetPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const location = useLocation();

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          password: Yup.string().min(6, 'Mínimo de 6 dígitos'),
          confirm_password: Yup.string().oneOf(
            [Yup.ref('password'), undefined],
            'As senhas devem ser iguais',
          ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { password, confirm_password } = data;
        const token = location.search.replace('?token=', '');

        if (!token) {
          throw new Error();
        }

        await api.post('/password/reset', {
          password,
          confirm_password,
          token,
        });

        history.push('/signin');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro ao alterar senha',
          description: 'Ocorreu um erro ao alterar sua senha, tente novamente.',
        });
      }
    },
    [addToast, history, location.search],
  );

  return (
    <Container>
      <Header isSignIn />

      <Content>
        <AnimationContainer>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <FormTitle>Alterar senha</FormTitle>

            <InputBlock>
              <TextInput
                name="password"
                icon={FiLock}
                type="password"
                title="Nova senha"
              />
              <TextInput
                name="confirm_password"
                icon={FiLock}
                type="password"
                title="Confirmar senha"
              />
            </InputBlock>

            <button type="submit">Confirmar alteração</button>
          </Form>
        </AnimationContainer>
      </Content>

      <Footer />
    </Container>
  );
};

export default ResetPassword;
