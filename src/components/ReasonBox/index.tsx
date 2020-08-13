import React, { HTMLAttributes } from 'react';

import { Container, Title, Content } from './styles';

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
}

const ReasonBox: React.FC<BoxProps> = ({ title, description, ...rest }) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Content>{description}</Content>
    </Container>
  );
};

export default ReasonBox;
