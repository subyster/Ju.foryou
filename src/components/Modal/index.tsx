import React, { useState, useEffect } from 'react';

import ReactModal from 'react-modal';

interface IModalProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  isOpen: boolean;
  setIsOpen: () => void;
}

const Modal: React.FC<IModalProps> = ({ children, isOpen, setIsOpen }) => {
  const [modalStatus, setModalStatus] = useState(isOpen);

  useEffect(() => {
    setModalStatus(isOpen);
  }, [isOpen]);

  return (
    <ReactModal
      shouldCloseOnOverlayClick={!false}
      onRequestClose={setIsOpen}
      isOpen={modalStatus}
      ariaHideApp={false}
      style={{
        content: {
          top: '55%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: 'var(--background)',
          color: 'var(--dark-purple-ju)',
          borderRadius: '48px',
          width: '1020px',
          height: '640px',
          borderWidth: '5px',
          borderColor: 'var(--purple-ju)',
          zIndex: 5,
        },
        overlay: {
          backgroundColor: '#121214e6',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
