import React from 'react';

export default function Gemstone({ gemstone }) {
  return (
    <div className="gemstone">
      <p>{gemstone.Name}</p>
      <p>Color: {gemstone.Color}</p>
      <p>Variety: {gemstone.Variety}</p>
      <ul>
        {' '}
        Properties
        {gemstone.Properties.map((property) => (
          <li key={property}>{property}</li>
        ))}
      </ul>
    </div>
  );
}
