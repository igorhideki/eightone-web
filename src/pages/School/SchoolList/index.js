import React from 'react';
import PropTypes from 'prop-types';

import Card from '~/components/Card';
import SchoolItem from '../SchoolItem';
import { Container } from './styles';

export default function SchoolList({ data }) {
  return (
    <Card>
      <Container>
        {data &&
          data.map(school => {
            return <SchoolItem data={school} />;
          })}
      </Container>
    </Card>
  );
}

SchoolList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
