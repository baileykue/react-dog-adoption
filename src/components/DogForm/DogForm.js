import React from 'react';
import './DogForm.css';

export default function DogForm({ name, bio, image, age, breed, updateDogForm, handleSubmit }) {
  return (
    <div>
      <form className="form">
        <label>Name: </label>
        <input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => {
            updateDogForm('name', e.target.value);
          }}
        />

        <label>Bio: </label>
        <input
          className="bio"
          placeholder="Bio"
          type="text"
          value={bio}
          onChange={(e) => {
            updateDogForm('name', e.target.value);
          }}
        />

        <label>Image: </label>
        <input
          placeholder="Image"
          type="text"
          value={image}
          onChange={(e) => {
            updateDogForm('name', e.target.value);
          }}
        />

        <label>Age: </label>
        <input
          placeholder="Age"
          type="text"
          value={age}
          onChange={(e) => {
            updateDogForm('name', e.target.value);
          }}
        />

        <label>Breed: </label>
        <input
          placeholder="Breed"
          type="text"
          value={breed}
          onChange={(e) => {
            updateDogForm('name', e.target.value);
          }}
        />

        <button onClick={handleSubmit}>Save</button>
      </form>
    </div>
  );
}
