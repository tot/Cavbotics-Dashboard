import { useState } from 'react';
import axios from 'axios';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Shooter = () => {
  return (
    <div className="w-screen h-screen bg-neutral-900 flex flex-col p-4">
      <Link to="/home" className="text-neutral-400 flex items-center">
        <FiArrowLeft className="text-neutral-400 mr-2" size={16} />
        Home
      </Link>
      <div className="pt-4">
        <h1 className="text-2xl text-white font-medium">Shooter</h1>
        <p className="text-base text-neutral-400">Adjust shooter settings</p>
      </div>
      <div className="pt-8 flex flex-1 flex-col text-white">
        No settings yet.
      </div>
    </div>
  );
};

export default Shooter;
