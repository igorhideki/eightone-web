import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '~/store/modules/auth/actions';
import { Container, Content, Profile } from './styles';
import { Button } from '~/styles/button';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            Time81
          </Link>
        </nav>

        <aside>
          <Profile>
            <strong>{profile.name}</strong>
            <Link to="/profile">Meu perfil</Link>
          </Profile>
          <Button danger onClick={handleSignOut}>
            Sair
          </Button>
        </aside>
      </Content>
    </Container>
  );
}
