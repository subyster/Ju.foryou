import React from 'react';

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

import Modal from '../Modal';
import TextInput from '../TextInput';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalAddItem: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <Title>
          <h1>NOVO ITEM</h1>
          <span>*Itens obrigatórios</span>
        </Title>
        <Content>
          <Inputs>
            <TextInput title="Nome do produto*" />
            <TextInput title="Categoria*" />
            <TextInput title="Tamanho" />
            <TextInput title="Valor Sugerido (R$)" />
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
        <Submit onClick={setIsOpen}>Enviar novo item para avaliação</Submit>
      </Container>
    </Modal>
  );
};

export default ModalAddItem;
