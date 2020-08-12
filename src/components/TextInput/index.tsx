import React, { InputHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container, Title, InputBox } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  icon?: React.ComponentType<IconBaseProps>;
  boxWidth?: number;
}

const TextInput: React.FC<InputProps> = ({
  title,
  boxWidth,
  icon: Icon,
  ...rest
}) => {
  return (
    <Container style={{ width: boxWidth }}>
      <Title>{title}</Title>
      <InputBox>
        {Icon && <Icon size={20} />}
        <input {...rest} />
      </InputBox>
    </Container>
  );
};

export default TextInput;
