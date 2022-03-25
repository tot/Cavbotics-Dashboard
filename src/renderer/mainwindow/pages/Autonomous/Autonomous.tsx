import { useState, useEffect } from 'react';
import axios from 'axios';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Autonomous = () => {
  const [routine, setRoutine] = useState<number>(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios('http://127.0.0.1:8883/getall');
        const data = await res.data;
        setRoutine(res.data.routine);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const displayRoutine = () => {
    if (routine === 0) return 'One ball';
    if (routine === 1) return 'Two ball';
    if (routine === 2) return 'Nothing';
    return 'No routine';
  };

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
        <p className="text-neutral-300 pb-4">
          Current routine: {displayRoutine()}
        </p>
        <div className="flex items-center space-x-4">
          <button
            type="button"
            className="inline-block px-4 py-2 rounded-md bg-neutral-700 text-white"
            onClick={async () => {
              try {
                const res = await axios.post(
                  'http://127.0.0.1:8883/double/set',
                  { key: 'routine', value: 0 }
                );
                console.log(await res.data);
                setRoutine(0);
              } catch (e) {
                console.log(e);
              }
            }}
          >
            Single Ball Routine
          </button>
          <button
            type="button"
            className="inline-block px-4 py-2 rounded-md bg-neutral-700 text-white"
            onClick={async () => {
              try {
                const res = await axios.post(
                  'http://127.0.0.1:8883/double/set',
                  { key: 'routine', value: 1 }
                );
                console.log(await res.data);
                setRoutine(1);
              } catch (e) {
                console.log(e);
              }
            }}
          >
            Two Ball Routine (default)
          </button>
          <button
            type="button"
            className="inline-block px-4 py-2 rounded-md bg-neutral-700 text-white"
            onClick={async () => {
              try {
                const res = await axios.post(
                  'http://127.0.0.1:8883/double/set',
                  { key: 'routine', value: 2 }
                );
                console.log(await res.data);
                setRoutine(2);
              } catch (e) {
                console.log(e);
              }
            }}
          >
            Do nothing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Autonomous;
