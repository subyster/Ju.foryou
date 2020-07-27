import React from 'react';

import { Container, Title, Content } from './styles';

interface BoxProps {
  title: string;
  description: string;
}

const ReasonBox: React.FC<BoxProps> = ({ title, description }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{description}</Content>
    </Container>
  );
};

export default ReasonBox;
