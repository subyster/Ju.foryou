/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, useEffect, ChangeEvent } from 'react';
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
  SmallSelect,
  CitySelect,
  FormLine,
  ConfirmForm,
} from './styles';

import profilePic from '../../assets/arthur.PNG';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TextInput from '../../components/TextInput';

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

        <form onSubmit={() => {}}>
          <FormContent>
            <FormColumn>
              <FormLine>
                <TextInput title="Nome" boxWidth={175} />
                <TextInput title="Sobrenome" boxWidth={275} />
              </FormLine>

              <FormLine>
                <TextInput title="CPF" boxWidth={175} />
                <TextInput title="Telefone para Contato" boxWidth={175} />
                <SmallSelect>
                  <h1>Gênero</h1>
                  <select name="gender" id="gender">
                    <option value="0"> </option>
                    <option value="M">M</option>
                    <option value="F">F</option>
                    <option value="N">Não declarar</option>
                  </select>
                </SmallSelect>
              </FormLine>

              <FormLine>
                <TextInput title="Endereço" />
              </FormLine>

              <FormLine>
                <TextInput title="Bairro" boxWidth={175} />
                <SmallSelect>
                  <h1>UF</h1>
                  <select
                    name="uf"
                    id="uf"
                    value={selectedUf}
                    onChange={handleSelectedUf}
                  >
                    <option value="0"> </option>
                    {ufs.map(uf => (
                      <option key={uf} value={uf}>
                        {uf}
                      </option>
                    ))}
                  </select>
                </SmallSelect>
                <CitySelect>
                  <h1>Cidade</h1>
                  <select
                    name="city"
                    id="city"
                    value={selectedCity}
                    onChange={handleSelectedCity}
                  >
                    <option value="0">Selecione a UF</option>
                    {cities.map(city => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </CitySelect>
              </FormLine>
            </FormColumn>
            <FormColumn>
              <FormLine>
                <TextInput title="E-mail" />
              </FormLine>

              <FormLine>
                <TextInput type="password" title="Senha" />
              </FormLine>

              <FormLine>
                <TextInput type="password" title="Confirmar Senha" />
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
        </form>
      </Content>

      <Footer />
    </Container>
  );
};

export default Profile;
