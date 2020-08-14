import React, { useEffect } from 'react';
import {
  FiAlertTriangle,
  FiXCircle,
  FiInfo,
  FiCheckCircle,
} from 'react-icons/fi';

import { ToastMessage, useToast } from '../../../hooks/toast';

import { Container } from './styles';

interface ToastProps {
  message: ToastMessage;
  // eslint-disable-next-line @typescript-eslint/ban-types
  style: object;
}

const icons = {
  info: <FiInfo size={20} />,
  error: <FiAlertTriangle size={20} />,
  success: <FiCheckCircle size={20} />,
};

const Toast: React.FC<ToastProps> = ({ message, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(message.id);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [message.id, removeToast]);

  return (
    <Container
      type={message.type}
      hasDescription={!!message.description}
      style={style}
    >
      {icons[message.type || 'info']}

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={16} />
      </button>
    </Container>
  );
};

export default Toast;
