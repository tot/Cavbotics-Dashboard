import { useState } from 'react';
import axios from 'axios';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Autonomous = () => {
  const [data, setData] = useState<any>({
    key: 'routine',
    value: 0,
  });

  return (
    <div className="w-screen h-screen bg-neutral-900 flex flex-col p-4">
      <Link to="/home" className="text-neutral-400 flex items-center">
        <FiArrowLeft className="text-neutral-400 mr-2" size={16} />
        Home
      </Link>
      <div className="pt-4">
        <h1 className="text-2xl text-white font-medium">Autonomous</h1>
        <p className="text-base text-neutral-400">
          Select autonomous routine to run
        </p>
      </div>
      <div className="pt-8">
        <div className="flex items-center space-x-4">
          <button
            type="button"
            className="inline-block px-4 py-2 rounded-md bg-neutral-700 text-white"
            onClick={() => {
              setData({ ...data, value: 0 });
            }}
          >
            Single Ball Routine
          </button>
          <button
            type="button"
            className="inline-block px-4 py-2 rounded-md bg-neutral-700 text-white"
            onClick={() => {
              setData({ ...data, value: 1 });
            }}
          >
            Two Ball Routine
          </button>
          <button
            type="button"
            className="inline-block px-4 py-2 rounded-md bg-neutral-700 text-white"
            onClick={() => {
              setData({ ...data, value: 2 });
            }}
          >
            Three Ball Routine
          </button>
        </div>
        <button
          className="text-white bg-blue-500 mt-4 py-2 px-4 rounded"
          type="button"
          onClick={async () => {
            try {
              const res = await axios.post(
                'http://127.0.0.1:8883/double/set',
                data
              );
              console.log(await res.data);
            } catch (e) {
              consolee.log(e);
            }
          }}
        >
          Apply changes
        </button>
      </div>
    </div>
  );
};

export default Autonomous;
