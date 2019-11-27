import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Card({ children, elevated }) {
  return <Container elevated={elevated}>{children}</Container>;
}

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  elevated: PropTypes.bool,
};

Card.defaultProps = {
  elevated: false,
};
