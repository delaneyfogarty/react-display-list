import React from 'react';

export default function Animal({ animal }) {
  return (
    <div className="animal">
      <p>{animal.Name}</p>
      <p>Type: {animal.Type}</p>
      <p>Lifespan: {animal.Lifespan}</p>
      <ul>
        {' '}
        Habitats
        {animal.Habitat.map((x) => (
          <li key={x}>{x}</li>
        ))}
      </ul>
    </div>
  );
}
