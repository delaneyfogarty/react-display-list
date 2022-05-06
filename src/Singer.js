import React from 'react';

export default function Singer({ singer }) {
  return (
    <div>
      <p>{singer.Name}</p>
      <p>{singer.Age}</p>
      <img src={singer.Image}></img>
      <p>{singer.First_Album}</p>
      <ul>
        {singer.Favorite_Songs.map((song) => (
          <li key={song}>{song}</li>
        ))}
      </ul>
    </div>
  );
}
