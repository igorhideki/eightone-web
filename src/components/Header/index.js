import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';
import { Button } from '~/components/Button';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <span>Eight One</span>
          </Link>
        </nav>

        <aside>
          <ul>
            <li>
              <Link to="/schools">Escolas</Link>
            </li>
            <li>
              <Link to="/">Convites</Link>
            </li>
            <li>
              <Link to="/">Cadastrar Workshop</Link>
            </li>
          </ul>
          <Button danger onClick={() => {}}>
            Sair
          </Button>
        </aside>
      </Content>
    </Container>
  );
}
