import React from 'react';
import PropTypes from 'prop-types';

import { MdPerson, MdEmail, MdLocalPhone } from 'react-icons/md';

import Card from '~/components/Card';
import { Button } from '~/components/Button';
import {
  Container,
  Header,
  Content,
  ItemContent,
  Status,
  Footer,
} from './styles';
import colors from '~/styles/colors';

export default function SchoolItem({ data }) {
  return (
    <Card elevated>
      <Container>
        <Header>
          <div>
            <h2>{data.name}</h2>
            <h3>{data.address}</h3>
          </div>
          <Status active={data.active}>
            {data.active ? 'Ativo' : 'Inativo'}
          </Status>
        </Header>
        <Content>
          <ItemContent>
            <MdPerson size={20} color={colors.gray} />
            <span>Diretor - {data.director}</span>
          </ItemContent>

          <ItemContent>
            <MdEmail size={20} color={colors.gray} />
            <span>{data.email}</span>
          </ItemContent>

          <ItemContent>
            <MdLocalPhone size={20} color={colors.gray} />
            <span>{data.tel}</span>
          </ItemContent>
        </Content>
        <Footer>
          <Button>Convidar para workshop</Button>
        </Footer>
      </Container>
    </Card>
  );
}

SchoolItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    director: PropTypes.string,
    address: PropTypes.string,
    email: PropTypes.string,
    tel: PropTypes.string,
    active: PropTypes.bool,
  }).isRequired,
};
