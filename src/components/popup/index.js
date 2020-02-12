import React from 'react';
import { Container } from './popup.styles';

const PopUp = ({ lng, lat, ...props }) => {
  return (
    <Container {...props}>
      <p>{lng}, {lat}</p>
    </Container>
  );
}

export default PopUp;
