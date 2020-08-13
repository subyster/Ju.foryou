/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, {
  useState,
  useEffect,
  ChangeEvent,
  useCallback,
  useRef,
} from 'react';
import axios from 'axios';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

import {
  Container,
  FormTitle,
  FormContent,
  FormColumn,
  AcceptText,
  FormLine,
  ConfirmForm,
  AcceptTerms,
} from './styles';

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

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [checked, setChecked] = useState(false);
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

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleChangeChecked = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        surname: Yup.string().required('Sobrenome obrigatório'),
        cpf: Yup.number().required('CPF obrigatório'),
        phone: Yup.number().required('Telefone obrigatório'),
        gender: Yup.string().required('Preencher campo'),
        address: Yup.string().required('Endereço obrigatório'),
        neighborhood: Yup.string().required('Campo obrigatório'),
        uf: Yup.string().required('Campo obrigatório'),
        city: Yup.string().required('Campo obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um E-mail válido'),
        password: Yup.string().min(6, 'Mínimo de 6 dígitos'),
        confirm_password: Yup.string().oneOf(
          [Yup.ref('password'), undefined],
          'As senhas devem ser iguais',
        ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Header />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <FormTitle>Preencha suas informações para fazer o cadastro</FormTitle>

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
              <TextInput name="address" title="Endereço" />
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
              <TextInput name="email" title="E-mail" />
            </FormLine>

            <FormLine>
              <TextInput name="password" type="password" title="Senha" />
            </FormLine>

            <FormLine>
              <TextInput
                name="confirm_password"
                type="password"
                title="Confirmar Senha"
              />
            </FormLine>

            <FormLine>
              <ConfirmForm>
                <AcceptTerms>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={handleChangeChecked}
                  />
                  <AcceptText>Aceito os termos de contrato</AcceptText>
                </AcceptTerms>
                <button type="submit" id="confirm">
                  Confirmar Cadastro
                </button>
              </ConfirmForm>
            </FormLine>
          </FormColumn>
        </FormContent>
      </Form>

      <Footer />
    </Container>
  );
};

export default SignUp;
