import React from 'react';

export default function Gemstone({ gemstone }) {
  return (
    <div>
      <p>{gemstone.Name}</p>
      <p>{gemstone.Color}</p>
      <p>{gemstone.Variety}</p>
      <p>{gemstone.Properties}</p>
    </div>
  );
}
