/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, useEffect, ChangeEvent } from 'react';
import { Form } from '@unform/web';
import axios from 'axios';

import { Link } from 'react-router-dom';
import { FiCamera } from 'react-icons/fi';
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
  ConfirmForm,
} from './styles';

import profilePic from '../../assets/arthur.PNG';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TextInput from '../../components/TextInput';
import Select from '../../components/Select';

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

const Profile: React.FC = () => {
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
            <img src={profilePic} alt="Profile pic" />
            <UpdatePictureButton>
              <FiCamera size={28} color="var(--background)" />
            </UpdatePictureButton>
          </UpdatePicture>
        </TopContent>

        <Form onSubmit={() => {}}>
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
                  <option value="0"> </option>
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
                  <option value="0">Selecione a UF</option>
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
                <TextInput boxWidth={475} name="email" title="E-mail" />
              </FormLine>

              <FormLine>
                <TextInput
                  boxWidth={475}
                  name="password"
                  type="password"
                  title="Senha"
                />
              </FormLine>

              <FormLine>
                <TextInput
                  boxWidth={475}
                  name="confirm_password"
                  type="password"
                  title="Confirmar Senha"
                />
              </FormLine>

              <FormLine>
                <ConfirmForm>
                  <Link to="/dashboard" id="confirm">
                    Atualizar Perfil
                  </Link>
                </ConfirmForm>
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
