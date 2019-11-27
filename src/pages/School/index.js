import React from 'react';

import SchoolList from './SchoolList';
import { Container } from './styles';

const schools = [
  {
    id: 1,
    name: 'Escola 1',
    email: 'escola1@gmail.com',
    tel: '319999999999',
    address: 'Rua teste',
    director: 'David',
    active: true,
    createdAt: '2019-11-26T19:54:09.709Z',
    updatedAt: '2019-11-26T19:54:09.709Z',
  },
  {
    id: 2,
    name: 'Escola 2',
    email: 'escola2@gmail.com',
    tel: '319999999999',
    address: 'Rua teste',
    director: 'Roger',
    active: true,
    createdAt: '2019-11-26T19:54:27.524Z',
    updatedAt: '2019-11-26T19:54:27.524Z',
  },
];

export default function School() {
  return (
    <Container>
      <h1>Escolas disponíveis</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        impedit excepturi laboriosam quae facilis nemo labore saepe nobis est
        incidunt lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex,
        incidunt.
      </p>
      <SchoolList data={schools} />
    </Container>
  );
}
