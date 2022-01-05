import React from 'react';
import './DogDetail.css';

export default function DogDetail({ name, bio, image }) {
  return (
    <div className="detail">
      <img src={image} className="bio-img" />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
}
