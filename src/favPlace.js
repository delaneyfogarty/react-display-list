import React from 'react';

export default function FavPlace({ favPlace }) {
  return (
    <div className="place">
      <p>{favPlace.Location}</p>
      <p>Country: {favPlace.Country}</p>
      <p>Favorite Food: {favPlace.Good_Food}</p>
      <p>Favorite Memory: {favPlace.Favorite_Memory}</p>
    </div>
  );
}
