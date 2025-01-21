import React from 'react';
import Navbar from './Navbar';
import { albumsData, songsData } from '../assets/frontend-assets/assets';
import AlbumItem from './AlbumItem';
import SongItem from './SongItem';

const DisplayHome = () => {
  return (
    <>
      <Navbar />

      {/* Featured Charts Section */}
      <div className="mb-8">
        <h1 className="my-5 font-bold text-xl md:text-2xl">Featured Charts</h1>
        <div className="flex gap-4 overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>

      {/* Today's Biggest Hits Section */}
      <div className="mb-8">
        <h1 className="my-5 font-bold text-xl md:text-2xl">Today's Biggest Hits</h1>
        <div className="flex gap-4 overflow-auto">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              name={item.name}
              desc={item.desc}
              id={item.id}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
