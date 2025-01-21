import React from 'react';
import { useNavigate } from 'react-router-dom';

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/album/${id}`)} 
      className='min-w-[150px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[240px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] transition duration-300 ease-in-out'
    >
      <img 
        className='rounded w-full h-[100px] sm:h-[120px] md:h-[150px] lg:h-[180px] object-cover' 
        src={image} 
        alt="" 
      />
      <p 
        className='font-bold mt-2 mb-1 text-sm sm:text-base md:text-lg lg:text-xl'
      >
        {name}
      </p>
      <p 
        className='text-slate-200 text-xs sm:text-sm md:text-base lg:text-lg'
      >
        {desc}
      </p>
    </div>
  );
};

export default AlbumItem;
