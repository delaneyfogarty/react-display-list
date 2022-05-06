import React from 'react';

export default function Singer({ singer }) {
  return (
    <div>
      <p>{singer.Name}</p>
      <p>{singer.Age}</p>
      <img src={singer.Image}></img>
      <p>{singer.First_Album}</p>
      <p>{singer.Favorite_Songs}</p>
    </div>
  );
}
