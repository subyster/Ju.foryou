import React, { InputHTMLAttributes } from 'react';

import { Container, Title, InputBox } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  boxWidth?: number;
}

const TextInput: React.FC<InputProps> = ({ title, boxWidth }) => {
  return (
    <Container style={{ width: boxWidth }}>
      <Title>{title}</Title>
      <InputBox>
        <input />
      </InputBox>
    </Container>
  );
};

export default TextInput;
