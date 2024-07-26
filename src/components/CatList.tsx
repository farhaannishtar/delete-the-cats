import React from 'react';
import useFetchCats from '../hooks/useFetchCats';
import CatCard from './CatCard';

const CatList: React.FC = () => {
  const { data: cats, isLoading, error } = useFetchCats();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Error</div>;

  const handleDelete = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log('Delete button clicked');
  }
  
  return (
    <>
      <ul className="flex flex-wrap justify-center items-center">
        {cats?.map((cat) => (
          <CatCard cat={cat} handleDelete={handleDelete}/>
        ))}
      </ul>
    </>
  );
};

export default CatList;