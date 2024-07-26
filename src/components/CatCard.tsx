import React from 'react';
import { CatCardProps } from '../types';

const CatCard: React.FC<CatCardProps> = ({ cat, handleDelete }) => {
  return (
    <li key={cat.id} className="flex flex-col m-3">
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg border-4 border-black">
        <div className="h-64 w-64 relative"> {/* Set fixed height and width and relative position */}
          <div 
            className='absolute top-0 right-0 cursor-pointer transition-transform duration-300 transform hover:rotate-[45deg]'
            onClick={handleDelete}
          >
            {/* SVG of the trash icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </div>
          <img 
            src={cat.url} 
            alt={'image of a cat'}  
            className="object-cover h-full w-full" 
          />
        </div>
      </div>
    </li>
  )
}

export default CatCard;