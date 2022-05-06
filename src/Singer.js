import React from 'react';

export default function Singer({ singer }) {
  return (
    <div className="singer">
      <p>{singer.Name}</p>
      <p>Age: {singer.Age}</p>
      <img src={singer.Image}></img>
      <p>First Album: {singer.First_Album}</p>
      <ul>
        {' '}
        My Favorite Songs
        {singer.Favorite_Songs.map((song) => (
          <li key={song}>{song}</li>
        ))}
      </ul>
    </div>
  );
}
