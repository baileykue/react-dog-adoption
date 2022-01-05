import React, { useState, useEffect } from 'react';
import { fetchDogs } from '../../services/dogs';
import DogList from '../../components/DogList/DogList';
import './AllDogs.css';

export default function AllDogs() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogs();
      setDogs(data);
    };
    fetchData();
  }, []);

  return (
    <div className="home">
      <h1>Dogs Available For Adoption</h1>
      <DogList dogs={dogs} />
    </div>
  );
}
