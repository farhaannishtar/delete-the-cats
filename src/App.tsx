import './App.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import CatList from './components/CatList';
import { useEffect, useState } from 'react';

const queryClient = new QueryClient();

function App() {

  const [bgColor, setBgColor] = useState('bg-purple-200'); // Default background color is white

  useEffect(() => {
    const colors = ['bg-red-200', 'bg-blue-200', 'bg-green-200', 'bg-yellow-200', 'bg-purple-200'];

    const intervalId = setInterval(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setBgColor(randomColor);
    }, 2500); // Change color every 2.5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <div className={`${bgColor} min-h-screen flex flex-col transition-colors duration-1000`}>
        <QueryClientProvider client={queryClient}>
          <h1 className='text-black font-bold text-5xl leading-tight mt-3'>Trash the Cats</h1>
          <CatList bgColor={bgColor}/>
        </QueryClientProvider>
      </div>
    </>
  )
}

export default App
