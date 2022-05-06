import React from 'react';

export default function Animal({ animal }) {
  return (
    <div>
      <p>{animal.Name}</p>
      <p>{animal.Type}</p>
      <p>{animal.Lifespan}</p>
      <p>{animal.Habitat}</p>
    </div>
  );
}
