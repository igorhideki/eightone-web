import React from 'react';

import { Container, Content, TitleCard } from './styles';

import Card from '~/components/Card';
import Profile from '~/components/Profile';
import Class from './Class';
import Invite from './Invite';

export default function Dashboard() {
  return (
    <Container>
      <h1>Dashboard</h1>

      <Content>
        <aside>
          <Profile />
        </aside>
        <main>
          <Card>
            <div>
              <TitleCard>Mentorias em andamento</TitleCard>
              <Class />
            </div>
          </Card>
          <Card>
            <div>
              <TitleCard>Convites recentes</TitleCard>
              <Invite />
            </div>
          </Card>
        </main>
      </Content>
    </Container>
  );
}
