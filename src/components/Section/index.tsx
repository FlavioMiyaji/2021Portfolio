import React from 'react';

import {
  Container,
  Header,
  Content,
} from './styles';

interface IProps {
  title: string;
}

const Section: React.FC<IProps> = ({ title, children }) => {
  return (
    <Container>
      <Header>
        <span>{title}</span>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
}

export default Section;
