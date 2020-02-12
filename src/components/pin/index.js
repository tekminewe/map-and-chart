import React, { useState } from 'react';
import { Marker } from './pin.styles';
import PopUp from '../popup';

const Pin = ({ lng, lat }) => {
  const [shouldShowPopUp, showPopUp] = useState(false);
  const handleOnClick = () => {
    showPopUp(!shouldShowPopUp);
  }

  return (
    <>
      {shouldShowPopUp && <PopUp data-testid="pop_up" onClick={handleOnClick} lng={lng} lat={lat} />}
      <Marker data-testid="pin" onClick={handleOnClick} />
    </>
  );
}

export default Pin;
