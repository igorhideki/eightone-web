import React from 'react';

import {
  Container,
  Content,
  Title,
  Description,
  ButtonsWrapper,
} from './styles';
import { Button } from '~/components/Button';
import Card from '~/components/Card';

export default function Invite() {
  return (
    <Container>
      <Card elevated>
        <Content>
          <Title>Escola Municipal José Aparecido Ribeiro</Title>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            fugit magnam veniam accusamus laudantium quisquam corporis quibusdam
            voluptate eius modi.
          </Description>
          <ButtonsWrapper>
            <Button danger>Rejeitar</Button>
            <Button>Aceitar</Button>
          </ButtonsWrapper>
        </Content>
      </Card>
      <Card elevated>
        <Content>
          <Title>Escola Municipal José Aparecido Ribeiro</Title>
          <Description>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
            fugit magnam veniam accusamus laudantium quisquam corporis quibusdam
            voluptate eius modi.
          </Description>
          <ButtonsWrapper>
            <Button danger>Rejeitar</Button>
            <Button>Aceitar</Button>
          </ButtonsWrapper>
        </Content>
      </Card>
    </Container>
  );
}
