import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  FiClock,
  FiCrosshair,
  FiEye,
  FiRefreshCcw,
  FiSettings,
} from 'react-icons/fi';

import StatusCard from '../../components/StatusCard/StatusCard';
import ConfigurationCard from '../../components/ConfigurationCard/ConfigurationCard';
import InfoCard from '../../components/InfoCard/InfoCard';

// interface Keys {

// }

const Home: React.FC = () => {
  const [connection, setConnection] = useState(false);
  const [keys, setKeys] = useState({});
  useEffect(() => {
    const fetchConnection = async () => {
      try {
        const res = await axios('http://127.0.0.1:8883/getconnection');
        const data = await res.data;
        if (res.data.Connected) {
          setConnection(true);
        } else setConnection(false);
        console.log(data);
      } catch (e) {
        console.log(e);
        setConnection(false);
      }
    };
    setTimeout(() => {
      fetchConnection();
    }, 10000);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios('http://127.0.0.1:8883/getall');
        const data = await res.data;
        setKeys(res.data.data);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
    // setTimeout(() => {
    //   fetchData();
    // }, 5000);
  }, []);

  return (
    <div className="w-screen h-screen bg-neutral-900 p-4 flex flex-col">
      <div className="mb-6 pb-4 border-b border-neutral-700 text-base text-white font-semibold flex justify-between items-center">
        <div className="">
          <div className="text-base text-white flex items-center">
            <span>
              Cavbotics{' '}
              <span className="text-sm text-neutral-400 font-normal">
                #8590
              </span>
            </span>
            <h1 className="font-normal flex items-center">
              <div
                className={`ml-2 relative w-4 h-4 ${
                  connection ? 'bg-green-500/20' : 'bg-amber-500/20'
                }  rounded-full mr-2`}
              >
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full ${
                    connection ? 'bg-green-500' : 'bg-amber-500'
                  }`}
                />
              </div>
            </h1>
          </div>
        </div>
        <div className="">
          <button
            type="button"
            className="text-base font-normal text-neutral-400 border-none outline-none"
          >
            Webcam
          </button>{' '}
          <span className="px-2 text-neutral-700/50">|</span>{' '}
          <button
            type="button"
            onClick={() => window.electron.ipcRenderer.openLimelight()}
            className="text-base font-normal text-neutral-400 border-none outline-none"
          >
            Limelight
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 mb-6 mt-2 gap-4">
        <InfoCard label="Robot IP" info="10.85.90.11" color="border-blue-500" />
        <InfoCard
          label="Battery Percentage"
          info="--"
          color="border-teal-500"
        />
        <InfoCard
          label="Current Runtime"
          info="--"
          color="border-emerald-500"
        />
        <InfoCard label="Unavailable" info="--" color="border-amber-500" />
      </div>
      <div className="flex w-full flex-1">
        <div className="grid grid-cols-2 w-full gap-6">
          <div className="col-span-1 flex flex-col">
            <h1 className="text-neutral-300 text-base font-normal">
              Configuration
            </h1>
            <div className="flex flex-1 mt-4 w-full">
              <div className="grid grid-cols-2 gap-4 w-full">
                <ConfigurationCard
                  title="Limelight"
                  description="Configure vision settings"
                  icon={
                    <div className="p-2 inline-block rounded-md bg-green-600">
                      <FiEye color="white" size={24} />
                    </div>
                  }
                  to="/limelight"
                />
                <ConfigurationCard
                  title="Autonomous"
                  description="Configure routines"
                  icon={
                    <div className="p-2 inline-block rounded-md bg-amber-600">
                      <FiClock color="white" size={24} />
                    </div>
                  }
                  to="/autonomous"
                />
                <ConfigurationCard
                  title="Shooter"
                  description="Configure shooter settings"
                  icon={
                    <div className="p-2 inline-block rounded-md bg-rose-600">
                      <FiCrosshair color="white" size={24} />
                    </div>
                  }
                  to="/shooter"
                />
                <ConfigurationCard
                  title="PID Tuning"
                  description="Configure vision settings"
                  icon={
                    <div className="p-2 inline-block rounded-md bg-indigo-600">
                      <FiSettings color="white" size={24} />
                    </div>
                  }
                  to="/pid"
                />
              </div>
            </div>
          </div>
          <div className="rounded-md border-neutral-700/60 flex flex-col">
            <div className="flex justify-between">
              <h1 className="text-neutral-300 text-base font-normal flex items-center">
                Robot Statuses
                <button
                  type="button"
                  onClick={async () => {
                    try {
                      const res = await axios('http://127.0.0.1:8883/getall');
                      const data = await res.data;
                      setKeys(res.data.data);
                      console.log(data.data);
                    } catch (e) {
                      console.log(e);
                    }
                  }}
                >
                  <FiRefreshCcw className="text-neutral-300 ml-2" size={18} />
                </button>
              </h1>
            </div>
            <div className="relative flex flex-1">
              <div className="mt-4 absolute inset-0 overflow-y-auto space-y-4">
                ds
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
