import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { fetchById, updateDog } from '../../services/dogs';
import DogForm from '../../components/DogForm/DogForm';

export default function DogEdit() {
  const [dog, setDog] = useState({});
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const history = useHistory();

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
    setDog({ ...dog });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDog(dog);
      history.push(`/dogs/${dog.id}`);
    } catch {
      setMessage('Something went wrong! Please try again.');
    }
  };

  if (loading) return <h3>Loading list of doggies...</h3>;

  return (
    <div>
      <h3>{message}</h3>
      <DogForm {...dog} updateDogForm={updateDogForm} handleSubmit={handleSubmit} />
    </div>
  );
}
