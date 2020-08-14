import React from 'react';
import { Form } from '@unform/web';

import {
  Container,
  Title,
  Content,
  Inputs,
  Photos,
  AddPhoto,
  MorePhotos,
  Submit,
} from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TextInput from '../../components/TextInput';

const NewItem: React.FC = () => {
  return (
    <Container>
      <Header isPrivate />

      <Title>
        <h1>NOVO ITEM</h1>
        <span>*Itens obrigatórios</span>
      </Title>
      <Form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        onSubmit={() => {}}
      >
        <Content>
          <Inputs>
            <TextInput name="name" title="Nome do produto*" />
            <TextInput name="category" title="Categoria*" />
            <TextInput name="size" title="Tamanho" />
            <TextInput name="price" title="Valor Sugerido (R$)" />
          </Inputs>
          <Photos>
            <AddPhoto>
              <div>
                <span>
                  Arraste ou clique aqui para adicionar a imagem do produto*
                </span>
              </div>
            </AddPhoto>
            <MorePhotos>
              <div>
                <strong>+</strong>
              </div>
            </MorePhotos>
          </Photos>
        </Content>
        <Submit type="submit">Enviar novo item para avaliação</Submit>
      </Form>

      <Footer />
    </Container>
  );
};

export default NewItem;
