import React, { useCallback } from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

import { Container } from './styles';

import Modal from '../Modal';

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleDeleteItem: () => void;
}

const ModalDeleteItem: React.FC<IModalProps> = ({
  isOpen,
  setIsOpen,
  handleDeleteItem,
}) => {
  const handleSubmit = useCallback(async () => {
    handleDeleteItem();
    setIsOpen();
  }, [setIsOpen, handleDeleteItem]);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <h1>Você deseja deletar este item?</h1>
        <span>
          <FiAlertTriangle size={16} /> Esta ação não pode ser revertida
        </span>
        <div>
          <button type="button" onClick={handleSubmit}>
            Confirmar
          </button>
          <button type="button" id="cancel" onClick={setIsOpen}>
            Cancelar
          </button>
        </div>
      </Container>
    </Modal>
  );
};

export default ModalDeleteItem;
