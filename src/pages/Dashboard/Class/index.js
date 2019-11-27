import React from 'react';
import { MdSchool } from 'react-icons/md';

import Card from '~/components/Card';
import { Container, Info } from './styles';
import colors from '~/styles/colors';

export default function Class() {
  return (
    <Card elevated>
      <Container>
        <MdSchool size={30} color={colors.primary} />
        <Info>
          <p>Escola Hilda Stranger Ribeiro</p>
          <p>Introdução a carreira de desenvolvedor web</p>
        </Info>
      </Container>
    </Card>
  );
}
