import React from 'react';
import { assets } from '../assets/frontend-assets/assets';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="hidden md:flex w-[25%] h-full p-2 flex-col gap-2 text-white overflow-hidden">
      
      {/* Home and Search Section */}
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div
          onClick={() => navigate('/')}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-5 h-5 md:w-6 md:h-6" src={assets.home_icon} alt="Home" />
          <p className="font-bold text-sm md:text-base lg:text-lg truncate">Home</p>
        </div>

        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-5 h-5 md:w-6 md:h-6" src={assets.search_icon} alt="Search" />
          <p className="font-bold text-sm md:text-base lg:text-lg truncate">Search</p>
        </div>
      </div>

      {/* Library Section */}
      <div className="bg-[#121212] h-[85%] rounded overflow-hidden">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-6 h-6 md:w-8 md:h-8" src={assets.stack_icon} alt="Library" />
            <p className="font-semibold text-sm md:text-base lg:text-lg truncate">
              Your Library
            </p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-4 h-4 md:w-5 md:h-5" src={assets.arrow_icon} alt="Arrow" />
            <img className="w-4 h-4 md:w-5 md:h-5" src={assets.plus_icon} alt="Plus" />
          </div>
        </div>

        {/* Create Playlist Section */}
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1 pl-4">
          <h1 className="text-xs md:text-sm lg:text-base truncate">Create your first playlist</h1>
          <p className="font-light text-xs md:text-sm truncate">
            It's easy we will help you
          </p>
          <button className="px-3 py-1.5 bg-white text-[10px] md:text-sm text-black rounded-full mt-4">
            Create Playlist
          </button>
        </div>

        {/* Podcasts Section */}
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start gap-1 pl-4 mt-4">
          <h1 className="text-xs md:text-sm lg:text-base truncate">Let's find some podcasts to follow</h1>
          <p className="font-light text-xs md:text-sm truncate">
            We'll keep you updated on new episodes
          </p>
          <button className="px-3 py-1.5 bg-white text-[10px] md:text-sm text-black rounded-full mt-4">
            Browse podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
