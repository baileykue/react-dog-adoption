import React from 'react';

export default function DogDetail({ name, bio, image }) {
  return (
    <div>
      <img src={image} />
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  );
}
