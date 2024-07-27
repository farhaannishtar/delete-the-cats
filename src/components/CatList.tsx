import React, { useEffect, useState } from 'react';
import useFetchCats from '../hooks/useFetchCats';
import CatCard from './CatCard';
import { Cat } from '../types';
import { CatListProps } from '../types';

const CatList: React.FC<CatListProps> = ({ bgColor }) => {
  const { data: initialCats, isLoading, error } = useFetchCats();
  const [cats, setCats] = useState<Cat[] | null>(null);

  useEffect(() => {
    if (initialCats !== undefined) {
      setCats(initialCats);
    } else {
      setCats(null);
    }
  }, [initialCats]);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error</div>;

  const handleDelete = (id: string) => {
    if (cats) {
      setCats(cats.filter(cat => cat.id !== id));
      console.log(`Delete button clicked for cat with id: ${id}`);
    } else {
      console.error('Cats list is undefined');
    }
  }
  
  return (
    <>
      <ul className="flex flex-wrap justify-center items-center">
        {cats?.map((cat) => (
          <CatCard cat={cat} handleDelete={() => handleDelete(cat.id)} bgColor={bgColor}/>
        ))}
      </ul>
    </>
  );
};

export default CatList;