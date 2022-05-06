import React from 'react';
import Gemstone from './Gemstone';

export default function GemstonesList({ gemstones }) {
  return (
    <div className="gemstone-list">
      {gemstones.map((gemstone) => (
        <Gemstone key={gemstone.Color + gemstone.Variety} gemstone={gemstone} />
      ))}
    </div>
  );
}
