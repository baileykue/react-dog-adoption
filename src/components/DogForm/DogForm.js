import React from 'react';

export default function DogForm({ name, bio, image, age, breed, updateDogForm, handleSubmit }) {
  return (
    <div>
      <form>
        <label>Name: </label>
        <input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => {
            updateDogForm('name', e.target.value);
          }}
        />
        <button onClick={handleSubmit}>Save</button>
      </form>
      <p>dog form</p>
    </div>
  );
}
