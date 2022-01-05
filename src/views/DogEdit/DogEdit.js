import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchById, updateDog, createDog } from '../../services/dogs';
import DogForm from '../../components/DogForm/DogForm';

export default function DogEdit() {
  const [dog, setDog] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchById(params.id);
      setDog(data);
      setLoading(false);
    };
    fetchData();
  }, [params.id]);

  const updateDogForm = (key, value) => {
    dog[key] = value;
    //this makes a NEW object, effectively updating each key value pair within the dog object
    setDog({ ...dog });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await updateDog(params.id);
  };

  return (
    <div>
      <DogForm {...dog} updateDogForm={updateDogForm} handleSubmit={handleSubmit} />
    </div>
  );
}
