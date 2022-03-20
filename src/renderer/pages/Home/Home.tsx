import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FiClock, FiCrosshair, FiEye, FiSettings } from 'react-icons/fi';
import ConfigurationCard from '../../components/ConfigurationCard/ConfigurationCard';
import InfoCard from '../../components/InfoCard/InfoCard';

const Home: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios('http://127.0.0.1:8883/getall');
        const data = await res.data;
        console.log(data);
      } catch (e: Error) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-screen h-screen bg-neutral-900 p-4 flex flex-col">
      {/* <h1 className="text-xl text-white font-medium">Dashboard</h1> */}
      <div className="mb-6 pb-4 border-b border-neutral-700 text-base text-white font-semibold flex justify-between items-center">
        <div className="">
          <p className="text-base text-white">
            Cavbotics{' '}
            <span className="text-sm text-neutral-400 font-normal">#8590</span>
          </p>
        </div>
        <div className="">
          {/* <h1 className="font-normal text-green-500 flex items-center">
            <div className="relative w-4 h-4 bg-green-500/20 rounded-full mr-2">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-green-500" />
            </div>
            Connected
          </h1> */}
          <Link
            to="/webcamfeed"
            // onClick={async () => {
            //   // const fetchData = async () => {
            //   const res = await axios('http://127.0.0.1:8883/getall');
            //   const data = await res.data;
            //   console.log(data);
            //   // };
            // }}
            className="text-base font-normal text-neutral-400 border-none outline-none"
          >
            Webcam
          </Link>{' '}
          <span className="px-2 text-neutral-700/50">|</span>{' '}
          <Link
            to="/limelightfeed"
            className="text-base font-normal text-neutral-400 border-none outline-none"
          >
            Limelight
          </Link>
        </div>
      </div>
      {/* <h1 className="text-neutral-300 text-base font-normal flex items-center mt-2">
        Details <div className="h-0.5 ml-4 flex-grow bg-neutral-700/60" />
      </h1> */}
      <div className="grid grid-cols-4 mb-6 mt-2 gap-4">
        <InfoCard label="Robot IP" info="10.85.90.11" color="border-blue-500" />
        <InfoCard
          label="Battery Percentage"
          info="85%"
          color="border-teal-500"
        />
        <InfoCard
          label="Current Runtime"
          info="32.03 seconds"
          color="border-emerald-500"
        />
        <InfoCard
          label="Current Runtime"
          info="32.03 seconds"
          color="border-green-500"
        />
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
            <h1 className="text-neutral-300 text-base font-normal">
              Robot Statuses
            </h1>
            <div className="relative flex flex-1">
              <div className="mt-4 absolute inset-0 overflow-y-auto space-y-4">
                <button
                  type="button"
                  className="w-full rounded-md bg-neutral-700/20 p-4 flex justify-between"
                >
                  <p className="text-white text-base">Limelight</p>
                  <p className="text-emerald-500">On</p>
                </button>
                <div className="w-full rounded-md bg-neutral-700/20 p-4 flex justify-between">
                  <p className="text-white text-base">Shooter</p>
                  <p className="text-emerald-500">On</p>
                </div>
                <div className="w-full rounded-md bg-neutral-700/20 p-4 flex justify-between">
                  <p className="text-white text-base">Intake</p>
                  <p className="text-emerald-500">On</p>
                </div>
                <div className="w-full rounded-md bg-neutral-700/20 p-4 flex justify-between">
                  <p className="text-white text-base">Swerve</p>
                  <p className="text-emerald-500">On</p>
                </div>
                <div className="w-full rounded-md bg-neutral-700/20 p-4 flex justify-between">
                  <p className="text-white text-base">Climber Retract</p>
                  <p className="text-emerald-500">On</p>
                </div>
                <div className="w-full rounded-md bg-neutral-700/20 p-4 flex justify-between">
                  <p className="text-white text-base">Climber Extend</p>
                  <p className="text-emerald-500">On</p>
                </div>
                <div className="w-full rounded-md bg-neutral-700/20 p-4 flex justify-between">
                  <p className="text-white text-base">Climber Extend</p>
                  <p className="text-emerald-500">On</p>
                </div>
                <div className="w-full rounded-md bg-neutral-700/20 p-4 flex justify-between">
                  <p className="text-white text-base">Climber Extend</p>
                  <p className="text-emerald-500">On</p>
                </div>
                <div className="w-full rounded-md bg-neutral-700/20 p-4 flex justify-between">
                  <p className="text-white text-base">Climber Extend</p>
                  <p className="text-emerald-500">On</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
