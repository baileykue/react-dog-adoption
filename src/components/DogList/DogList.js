import React from 'react';
import { Link } from 'react-router-dom';
import DogCard from '../DogCard/DogCard';

export default function DogList({ dogs }) {
  return (
    <>
      <h1>list of dogs will be here</h1>
      {dogs.map((dog) => (
        <Link key={dog.id}>
          <DogCard key={dog.id} {...dog} />
        </Link>
      ))}
    </>
  );
}
