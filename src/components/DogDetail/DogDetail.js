import React from 'react';
import './DogDetail.css';

export default function DogDetail({ name, bio, image, handleEdit, handleDelete }) {
  return (
    <div className="detail">
      <div className="bio-detail">
        <img src={image} className="bio-img" />
        <h2>{name}</h2>
        <p>{bio}</p>
      </div>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
