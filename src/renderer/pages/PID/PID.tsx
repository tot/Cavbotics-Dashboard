import { useState } from 'react';
import axios from 'axios';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const PID = () => {
  const [P, setP] = useState(0);
  const [I, setI] = useState(0);
  const [D, setD] = useState(0);

  return (
    <div className="w-screen h-screen bg-neutral-900 flex flex-col p-4">
      <Link to="/home" className="text-neutral-400 flex items-center">
        <FiArrowLeft className="text-neutral-400 mr-2" size={16} />
        Home
      </Link>
      <div className="pt-4">
        <h1 className="text-2xl text-white font-medium">PID Tuning</h1>
        <p className="text-base text-neutral-400">
          Adjust PID values for driving
        </p>
      </div>
      <div className="pt-8 flex flex-1 flex-col">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <input
              className="p-1.5 text-base border border-neutral-700 bg-transparent rounded focus:outline-none text-neutral-200"
              type="number"
              placeholder="P value"
              defaultValue={P}
              onChange={(e: Event) => {
                setP(parseFloat(e.target.value));
              }}
            />
            <button
              type="button"
              className="inline-block px-4 py-2 rounded-md bg-neutral-700 text-white"
              onClick={async () => {
                try {
                  const res = await axios.post(
                    'http://127.0.0.1:8883/double/set',
                    {
                      key: 'P',
                      value: P,
                    }
                  );
                  console.log(await res.data);
                } catch (e) {
                  consolee.log(e);
                }
              }}
            >
              Update P
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <input
              className="p-1.5 text-base border border-neutral-700 bg-transparent rounded focus:outline-none text-neutral-200"
              type="number"
              placeholder="P value"
              defaultValue={I}
              onChange={(e: Event) => {
                setP(parseFloat(e.target.value));
              }}
            />
            <button
              type="button"
              className="inline-block px-4 py-2 rounded-md bg-neutral-700 text-white"
              onClick={async () => {
                try {
                  const res = await axios.post(
                    'http://127.0.0.1:8883/double/set',
                    {
                      key: 'I',
                      value: I,
                    }
                  );
                  console.log(await res.data);
                } catch (e) {
                  consolee.log(e);
                }
              }}
            >
              Update I
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <input
              className="p-1.5 text-base border border-neutral-700 bg-transparent rounded focus:outline-none text-neutral-200"
              type="number"
              placeholder="P value"
              defaultValue={D}
              onChange={(e: Event) => {
                setP(parseFloat(e.target.value));
              }}
            />
            <button
              type="button"
              className="inline-block px-4 py-2 rounded-md bg-neutral-700 text-white"
              onClick={async () => {
                try {
                  const res = await axios.post(
                    'http://127.0.0.1:8883/double/set',
                    {
                      key: 'D',
                      value: D,
                    }
                  );
                  console.log(await res.data);
                } catch (e) {
                  consolee.log(e);
                }
              }}
            >
              Update D
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PID;
