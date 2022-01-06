import { useState } from 'react';
import { createDog } from '../../services/dogs';
import DogForm from '../../components/DogForm/DogForm';
import { useHistory } from 'react-router-dom';

export default function Admin() {
  const [dog, setDog] = useState({});
  const history = useHistory();

  const updateDogForm = (key, value) => {
    dog[key] = value;
    setDog({ ...dog });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createDog(dog);
    history.push(`/`);
  };

  return (
    <div>
      <DogForm {...dog} handleSubmit={handleSubmit} updateDogForm={updateDogForm} />
    </div>
  );
}
