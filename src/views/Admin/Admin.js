import { useState } from 'react';
import { createDog } from '../../services/dogs';
import DogForm from '../../components/DogForm/DogForm';

export default function Admin() {
  const [dog, setDog] = useState({});

  const updateDogForm = (key, value) => {
    dog[key] = value;
    setDog({ ...dog });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createDog(dog);
    //history.push(`/dogs/${data[0].id}`)
  };

  return (
    <div>
      <DogForm {...dog} handleSubmit={handleSubmit} updateDogForm={updateDogForm} />
    </div>
  );
}
