import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Container } from './map.styles';
import locations from './location.json';
import Pin from '../../components/pin';

const MapPage = () => {
  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyB-K65jTqlU_9t6ox8aAEluCK--xLP3uGI' }}
        defaultCenter={{
          lat: +locations[0].lat,
          lng: +locations[0].lon,
        }}
        defaultZoom={18}
      >
        {locations.map(({ lat, lon }, index) => (
          <Pin key={index} lat={lat} lng={lon} />
        ))}
      </GoogleMapReact>
    </Container>
  );
}

export default MapPage;
