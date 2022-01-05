import React from 'react';
import './DogCard.css';

export default function DogCard({ age, name, image, breed }) {
  return (
    <div className="card">
      <img src={image} />
      <h2>{name}</h2>
      <p>
        Hi! I am a(n) {age} year(s) old {breed}. I cannot wait to meet you!
      </p>
    </div>
  );
}
