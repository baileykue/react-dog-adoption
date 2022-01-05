import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DogDetail from '../../components/DogDetail/DogDetail';
import { fetchById } from '../../services/dogs';

export default function Dog() {
  const [dog, setDog] = useState([]);
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

  if (loading) return <h3>Loading doggy info...</h3>;

  return (
    <div className="detail">
      <DogDetail {...dog} showDetail />
    </div>
  );
}
