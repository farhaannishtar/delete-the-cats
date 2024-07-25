import { useQuery } from '@tanstack/react-query';
import { Cat } from '../types';

// Fetch function to get the cat data
const fetchCats = async (): Promise<Cat[]> => {
  const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

// Custom hook to fetch cat data
const useFetchCats = () => {
  return useQuery({
    queryKey: ['cats'],
    queryFn: fetchCats,
  });
};

export default useFetchCats;