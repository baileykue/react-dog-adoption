import React from 'react';

export default function DogForm({ name, bio, image, age, breed, updateDog }) {
  return (
    <div>
      <form>
        <label>Name: </label>
        <input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => {
            updateDog('name', e.target.value);
          }}
        />
      </form>
      <p>dog form</p>
    </div>
  );
}
