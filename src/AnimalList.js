import React from 'react';
import Animal from './Animal';

export default function AnimalList({ animals }) {
  return (
    <div className="animal-list">
      {animals.map((animal) => (
        <Animal key={animal.Name + animal.Type} animal={animal} />
      ))}
    </div>
  );
}
