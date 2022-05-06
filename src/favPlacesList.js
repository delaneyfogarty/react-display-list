import React from 'react';
import FavPlace from './favPlace';

export default function favPlacesList({ favPlaces }) {
  return (
    <div className="fav-places-list">
      {favPlaces.map((favPlace) => (
        <FavPlace key={favPlace.Country + favPlace.Location} favPlace={favPlace} />
      ))}
    </div>
  );
}
