import React, { useContext } from 'react';
import PlayerContext from '../context/PlayerContext';

const SongItem = ({ name, image, desc, id }) => {
  const { playWithId } = useContext(PlayerContext);

  return (
    <div
      onClick={() => playWithId(id)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] flex flex-col items-center"
    >
      {/* Responsive Image */}
      <img className="w-full h-auto rounded-md" src={image} alt={name} />
      
      {/* Song Name */}
      <p className="font-bold mt-2 mb-1 text-sm sm:text-base md:text-lg text-center">{name}</p>

      {/* Song Description */}
      <p className="text-slate-200 text-xs sm:text-sm text-center">{desc}</p>
    </div>
  );
};

export default SongItem;
