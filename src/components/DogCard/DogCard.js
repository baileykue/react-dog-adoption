import React from 'react';

export default function DogCard({ age, name, image, breed }) {
  return (
    <div>
      <img src={image} />
      <h3>{name}</h3>
      <p>
        Hi! I am a(n) {age} year(s) old {breed}. I cannot wait to meet you!
      </p>
    </div>
  );
}
