import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import DogDetail from '../../components/DogDetail/DogDetail';
import { deleteDogById, fetchById } from '../../services/dogs';

export default function Dog() {
  const [dog, setDog] = useState([]);
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

  const handleEdit = async () => {
    history.push(`/dogs/${params.id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await deleteDogById(params.id);
      alert("You have successfully removed this dog's info");
      history.push('/');
    } catch {
      alert('Something went wrong! Please try again.');
    }
  };

  if (loading) return <h3>Loading doggy info...</h3>;

  return (
    <div>
      <DogDetail {...dog} handleEdit={handleEdit} handleDelete={handleDelete} showDetail />
    </div>
  );
}
