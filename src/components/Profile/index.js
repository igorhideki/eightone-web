import React from 'react';

import Card from '~/components/Card';
import Avatar from '~/components/Avatar';
import { Container, Name, Role } from './styles';

export default function Profile() {
  return (
    <Card>
      <Container>
        <Avatar />
        <Name>Nome do usuário</Name>
        <Role>Função</Role>
      </Container>
    </Card>
  );
}
