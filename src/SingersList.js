import React from 'react';
import Singer from './Singer';

export default function SingersList({ singers }) {
  return (
    <div className="singers-list">
      {singers.map((singer) => (
        <Singer key={singer.Name + singer.Age} singer={singer} />
      ))}
    </div>
  );
}
