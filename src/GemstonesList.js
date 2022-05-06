import React from 'react';
import Gemstone from './Gemstone';

export default function favPlacesList({ gemstones }) {
  return (
    <div className="fav-places-list">
      {gemstones.map((gemstone) => (
        <Gemstone key={gemstone.Color + gemstone.Variety} gemstone={gemstone} />
      ))}
    </div>
  );
}
