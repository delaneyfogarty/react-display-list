import React from 'react';

export default function FavPlace({ favPlace }) {
  return (
    <div>
      <p>{favPlace.Country}</p>
      <p>{favPlace.Good_Food}</p>
      <p>{favPlace.Favorite_Memory}</p>
      <p>{favPlace.Location}</p>
    </div>
  );
}
