import React from 'react';
import besh from '../assets/besh.jpg';
import tort from '../assets/tort.jpg';
import uch from '../assets/uch.jpg';
import ikki from '../assets/ikki.jpg';
import bir from '../assets/bir.jpg';

const Grid = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-5 grid-rows-4 gap-1 p-10">
        
        {/* First Block */}
        <div className="border p-2 w-full h-full bg-blue-100 col-span-1 row-span-2">
          <img src={besh} alt="IMG" className="w-full h-full object-cover" />
        </div>
        <div className="border p-2 w-48 h-36 bg-blue-100">
          <img src={tort} alt="IMG" className="w-full h-full object-cover" />
        </div>
        <div className="border p-2 w-48 h-36 bg-blue-100">
          <img src={ikki} alt="IMG" className="w-full h-full object-cover" />
        </div>
        <div className="border p-2 w-48 h-36 bg-blue-100">
          <img src={uch} alt="IMG" className="w-full h-full object-cover" />
        </div>
        <div className="border p-2 w-48 h-36 bg-blue-100">
          <img src={bir} alt="IMG" className="w-full h-full object-cover" />
        </div>

        {/* Second Block */}
        <div className="border p-2 w-full h-full bg-blue-100 col-span-1 row-span-2">
          <img src={besh} alt="IMG" className="w-full h-full object-cover" />
        </div>

        <div className="border p-2 w-48 h-36 bg-blue-200">
          <img src={tort} alt="IMG" className="w-full h-full object-cover" />
        </div>
        <div className="border p-2 w-48 h-36 bg-red-900 col-span-1 row-span-2">
          <img src={ikki} alt="IMG" className="w-full h-full object-cover" />
        </div>
        <div className="border p-2 w-48 h-36 bg-blue-200">
          <img src={uch} alt="IMG" className="w-full h-full object-cover" />
        </div>
        <div className="border p-2 w-48 h-36 bg-blue-200">
          <img src={bir} alt="IMG" className="w-full h-full object-cover" />
        </div>

        {/* Third Block */}
        <div className="border p-2 w-full h-full bg-blue-100 col-span-1 row-span-2">
          <img src={besh} alt="IMG" className="w-full h-full object-cover" />
        </div>

        <div className="border p-2 w-48 h-36 bg-blue-900 col-span-1 row-span-2">
          <img src={tort} alt="IMG" className="w-full h-full object-cover" />
        </div>

        <div className="border p-2 w-48 h-36 bg-blue-200">
          <img src={ikki} alt="IMG" className="w-full h-full object-cover" />
        </div>
        <div className="border p-2 w-48 h-36 bg-blue-300">
          <img src={uch} alt="IMG" className="w-full h-full object-cover" />
        </div>
        <div className="border p-2 w-48 h-36 bg-blue-300">
          <img src={bir} alt="IMG" className="w-full h-full object-cover" />
        </div>

        {/* Fourth Block */}
        <div className="border p-2 w-48 h-36 bg-blue-400">
          <img src={besh} alt="IMG" className="w-full h-full object-cover" />
        </div>
        <div className="border p-2 w-48 h-36 bg-blue-400">
          <img src={tort} alt="IMG" className="w-full h-full object-cover" />
        </div>
        <div className="border p-2 w-48 h-36 bg-blue-400">
          <img src={ikki} alt="IMG" className="w-full h-full object-cover" />
        </div>
        <div className="border p-2 w-48 h-36 bg-blue-400">
          <img src={uch} alt="IMG" className="w-full h-full object-cover" />
        </div>
        <div className="border p-2 w-48 h-36 bg-blue-400">
          <img src={bir} alt="IMG" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Grid;
