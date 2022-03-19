import { useState } from 'react';
// import fetch from 'node-fetch';
import axios from 'axios';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Limelight = () => {
  const [data, setData] = useState<any>({
    key: 'hi',
    value: 0.3,
  });
  const [value, setValue] = useState<number>();

  return (
    <div className="w-screen h-screen bg-neutral-900 p-4 flex flex-col">
      <Link to="/home" className="text-neutral-400 flex items-center">
        <FiArrowLeft className="text-neutral-400 mr-2" size={16} />
        Home
      </Link>
      <div className="pt-4">
        <h1 className="text-2xl text-white font-medium">Limelight</h1>
        <p className="text-base text-neutral-400">
          View and configure all Limelight settings
        </p>
      </div>
      <input
        className=""
        type="number"
        placeholder="Input"
        onChange={(e: Event) => {
          setValue(parseFloat(e.target.value));
        }}
      />
      <button
        type="button"
        className="p-2 bg-white text-black"
        onClick={() => console.log(value)}
      >
        log value
      </button>
      <button
        type="button"
        className="p-2 bg-white text-black"
        onClick={() => console.log(data)}
      >
        log data
      </button>
      <button
        className="text-white bg-blue-500"
        type="button"
        onClick={() => {
          setData({ ...data, value });
        }}
      >
        jieff
      </button>
      <button
        className="text-white bg-blue-500"
        type="button"
        onClick={async () => {
          try {
            const res = await axios.post(
              'http://127.0.0.1:8883/double/set',
              data
            );
            console.log(await res.data);
          } catch (e) {
            console.log(e);
          }
        }}
      >
        make request
      </button>
    </div>
  );
};

export default Limelight;
