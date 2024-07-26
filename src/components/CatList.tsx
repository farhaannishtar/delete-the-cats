import React, { useState } from 'react';
import useFetchCats from '../hooks/useFetchCats';
import CatCard from './CatCard';
// import { Cat } from '../types';

const CatList: React.FC = () => {
  const { data: initialCats, isLoading, error } = useFetchCats();
  const [cats, setCats] = useState(initialCats);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error</div>;

  const handleDelete = (id: string) => {
    setCats(cats?.filter(cat => cat.id !== id));
    console.log(`Delete button clicked for cat with id: ${id}`);
  }

  console.log(cats);
  
  return (
    <>
      <ul className="flex flex-wrap justify-center items-center">
        {cats?.map((cat) => (
          <CatCard cat={cat} handleDelete={() => handleDelete(cat.id)}/>
        ))}
      </ul>
    </>
  );
};

export default CatList;