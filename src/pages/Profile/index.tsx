/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, {
  useState,
  useEffect,
  ChangeEvent,
  useRef,
  useCallback,
} from 'react';
import { useHistory } from 'react-router-dom';
import { FiCamera } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import axios from 'axios';
import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';

import {
  Container,
  Content,
  TopContent,
  TopText,
  UpdatePicture,
  UpdatePictureButton,
  FormContent,
  FormColumn,
  FormLine,
} from './styles';

import blankAvatar from '../../assets/blank-avatar.svg';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TextInput from '../../components/TextInput';
import Select from '../../components/Select';
import { useAuth } from '../../hooks/auth';

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

interface ProfileFormData {
  name: string;
  surname: string;
  cpf: number;
  phone: number;
  gender: string;
  address: string;
  neighborhood: string;
  uf: string;
  city: string;
  email: string;
  old_password: string;
  password: string;
  confirm_password: string;
}

const Profile: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();
  const { user, updateUser } = useAuth();

  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedUf, setSelectedUf] = useState('0');
  const [selectedCity, setSelectedCity] = useState('0');

  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
      )
      .then(response => {
        const ufInitials = response.data.map(uf => uf.sigla);

        setUfs(ufInitials.sort());
      });
  }, []);

  useEffect(() => {
    if (selectedUf === '0') {
      return;
    }

    axios
      .get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`,
      )
      .then(response => {
        const cityNames = response.data.map(city => city.nome);

        setCities(cityNames);
      });
  }, [selectedUf]);

  function handleSelectedUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;

    setSelectedUf(uf);
  }

  function handleSelectedCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;

    setSelectedCity(city);
  }

  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          surname: Yup.string().required('Sobrenome obrigatório'),
          cpf: Yup.number().typeError('Apenas números'),
          phone: Yup.number().typeError('Apenas números'),
          gender: Yup.string().required('Preencher campo'),
          address: Yup.string().required('Endereço obrigatório'),
          neighborhood: Yup.string().required('Campo obrigatório'),
          uf: Yup.string().required('Campo obrigatório'),
          city: Yup.string().required('Campo obrigatório'),
          old_password: Yup.string(),
          password: Yup.string().when('old_password', {
            is: val => !!val.length,
            then: Yup.string().required('Digite a nova senha'),
            otherwise: Yup.string(),
          }),
          password_confirmation: Yup.string()
            .when('old_password', {
              is: val => !!val.length,
              then: Yup.string().required('Confirme a nova senha'),
              otherwise: Yup.string(),
            })
            .oneOf(
              [Yup.ref('password'), undefined],
              'As senhas devem ser iguais',
            ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const {
          name,
          surname,
          cpf,
          phone,
          gender,
          address,
          neighborhood,
          uf,
          city,
          old_password,
          password,
          confirm_password,
        } = data;

        const formData = {
          name,
          surname,
          cpf,
          phone,
          gender,
          address,
          neighborhood,
          uf,
          city,
          ...(old_password
            ? {
                old_password,
                password,
                confirm_password,
              }
            : {}),
        };

        const response = await api.put('/profile', formData);

        updateUser(response.data);

        history.push('/dashboard');

        addToast({
          type: 'success',
          title: 'Perfil atualizado com sucesso!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na atualização',
          description:
            'Ocorreu ao atualizar o perfil, cheque os campos e tente novamente.',
        });
      }
    },
    [addToast, history, updateUser],
  );

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();

        data.append('avatar', e.target.files[0]);

        api.patch('/users/avatar', data).then(response => {
          updateUser(response.data);

          addToast({
            type: 'success',
            title: 'Avatar Atualizado!',
          });
        });
      }
    },
    [addToast, updateUser],
  );

  return (
    <Container>
      <Header />

      <Content>
        <TopContent>
          <TopText>
            <h1>Atualização do Perfil</h1>
            <span>Preencha apenas as informações a serem atualizadas:</span>
          </TopText>
          <UpdatePicture>
            <img
              src={user.avatar_url ? user.avatar_url : blankAvatar}
              alt={user.name}
            />
            <UpdatePictureButton htmlFor="avatar">
              <FiCamera size={28} color="var(--background)" />

              <input type="file" id="avatar" onChange={handleAvatarChange} />
            </UpdatePictureButton>
          </UpdatePicture>
        </TopContent>

        <Form
          ref={formRef}
          initialData={{
            name: user.name,
            surname: user.surname,
            cpf: user.cpf,
            phone: user.phone,
            gender: user.gender,
            address: user.address,
            neighborhood: user.neighborhood,
          }}
          onSubmit={handleSubmit}
        >
          <FormContent>
            <FormColumn>
              <FormLine>
                <TextInput name="name" title="Nome" boxWidth={175} />
                <TextInput name="surname" title="Sobrenome" boxWidth={275} />
              </FormLine>

              <FormLine>
                <TextInput name="cpf" title="CPF" boxWidth={175} />
                <TextInput
                  name="phone"
                  title="Telefone para Contato"
                  boxWidth={175}
                />
                <Select name="gender" title="Gênero" boxWidth={75}>
                  <option value="0"> </option>
                  <option value="M">M</option>
                  <option value="F">F</option>
                  <option value="N">Não declarar</option>
                </Select>
              </FormLine>

              <FormLine>
                <TextInput boxWidth={475} name="address" title="Endereço" />
              </FormLine>

              <FormLine>
                <TextInput name="neighborhood" title="Bairro" boxWidth={175} />
                <Select
                  name="uf"
                  title="UF"
                  value={selectedUf}
                  onChange={handleSelectedUf}
                  boxWidth={75}
                >
                  <option value={user.uf}>{user.uf}</option>
                  {ufs.map(uf => (
                    <option key={uf} value={uf}>
                      {uf}
                    </option>
                  ))}
                </Select>
                <Select
                  title="Cidade"
                  name="city"
                  value={selectedCity}
                  onChange={handleSelectedCity}
                  boxWidth={175}
                >
                  <option value={user.city}>{user.city}</option>
                  {cities.map(city => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </Select>
              </FormLine>
            </FormColumn>
            <FormColumn>
              <FormLine>
                <TextInput
                  boxWidth={475}
                  name="old_password"
                  type="password"
                  title="Senha atual"
                />
              </FormLine>

              <FormLine>
                <TextInput
                  boxWidth={475}
                  name="password"
                  type="password"
                  title="Nova senha"
                />
              </FormLine>

              <FormLine>
                <TextInput
                  boxWidth={475}
                  name="confirm_password"
                  type="password"
                  title="Confirmar nova senha"
                />
              </FormLine>

              <FormLine>
                <button type="submit" id="confirm">
                  Atualizar Perfil
                </button>
              </FormLine>
            </FormColumn>
          </FormContent>
        </Form>
      </Content>

      <Footer />
    </Container>
  );
};

export default Profile;
