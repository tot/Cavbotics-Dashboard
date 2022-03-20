import { useState, useEffect } from 'react';
import axios from 'axios';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Shooter = () => {
  const [shooterMode, setMode] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios('http://127.0.0.1:8883/getall');
        const data = await res.data;
        setMode(res.data.shooterMode);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

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
      <div className="pt-8">
        <p className="text-neutral-300 pb-4">
          Current routine: {shooterMode === 0 ? 'autoaim' : 'manual'}
        </p>
        <div className="space-x-4">
          <button
            type="button"
            className="inline-block px-4 py-2 rounded-md bg-neutral-700 text-white"
            onClick={async () => {
              try {
                const res = await axios.post(
                  'http://127.0.0.1:8883/double/set',
                  {
                    key: 'shooterMode',
                    value: 0,
                  }
                );
                setMode(0);
                console.log(await res.data);
              } catch (e) {
                console.log(e);
                setMode(0);
              }
            }}
          >
            Autoaim Shooter
          </button>
          <button
            type="button"
            className="inline-block px-4 py-2 rounded-md bg-neutral-700 text-white"
            onClick={async () => {
              try {
                const res = await axios.post(
                  'http://127.0.0.1:8883/double/set',
                  {
                    key: 'shooterMode',
                    value: 1,
                  }
                );
                setMode(1);
                console.log(await res.data);
              } catch (e) {
                console.log(e);
                setMode(0);
              }
            }}
          >
            Manual Shooter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shooter;
