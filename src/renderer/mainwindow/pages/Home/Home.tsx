import { useEffect, useState } from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
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
import TimerCard from 'renderer/mainwindow/components/TimerCard/TimerCard';

interface Keys {
  connection: boolean;
  DeclineHoodCommand: boolean;
  DoNothingCommand: boolean;
  ExtendClimberCommand: boolean;
  ledMode: number;
  HoodCommand: boolean;
  InnerIndexCommand: boolean;
  IntakeCommand: boolean;
  KickOutBallsCommand: boolean;
  OneBallAuto: boolean;
  OuterIndexCommand: boolean;
  RaiseHoodCommand: boolean;
  RetractClimberCode: boolean;
  ShootCommand: boolean;
  SwerveCommand: boolean;
  routine: number;
  P: number;
  I: number;
  D: number;
  shooterMode: number;
  batteryVoltage: number;
  robotMode: number;
}

const Home: React.FC = () => {
  const [time, setTime] = useState<number>(135000);
  const [running, setRunning] = useState<boolean>(false);

  useHotkeys('ctrl+f', () => {
    setRunning(true);
    console.log('ctrl f');
  });

  useHotkeys('ctrl+d', () => {
    setRunning(false);
    console.log('ctrl d');
  });

  useHotkeys('ctrl+g', () => {
    setTime(0);
    console.log('ctrl g');
  });

  useEffect(() => {
    let interval;
    if (running) {
      console.log('timer running');
      interval = setInterval(() => {
        setTime(time - 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  });






  const [robotMode, setRobotMode] = useState<number>(0);
  
  const robotmode = {
    mode: robotMode
  } 

  const handler = {
    set: function(robotmode, mode, value){
      robotmode[mode] = value;
      setRunning(true);
      return true;
    }
  }
  const proxy1 = new Proxy(robotmode, handler)

  useEffect(() => {
    setInterval(()=>{
    const fetchData = async () => {
      try {
        const res = await axios.get('http://127.0.0.1:8883/double/get?key=robotMode');
        const data = await res.data;
        const val = data.val;
        if(robotMode != val){
          setMode(val);
          robotmode.mode = val
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
    },100)
  }, []);





  // var targetObj = {};
  // var targetProxy = new Proxy(targetObj, {
  // set: function (target, key, value) {
  //     console.log(`${key} set to ${value}`);
  //     target[key] = value;
  //     return true;
  //   }
  // });



  // const[teleStatus, setTeleStatus] = useState<number>(0);
  
  // useEffect(()=>{
  //   setInterval(()=>{
  //     if()
  //       }, 100)
  // }, [])

  // useEffect(()=>{
  //   fetchData()
  // }, [teleStatus])

  
  const [shooterMode, setMode] = useState<number>(0);

  // useEffect(() => {
  //   onClick={async () => {
  //     try {
  //       const res = await axios.post(
  //         'http://127.0.0.1:8883/double/set',
  //         {
  //           key: 'shooterMode',
  //           value: 0,
  //         }
  //       );
  //       setMode(0);
  //       console.log(await res.data);
  //     } catch (e) {
  //       console.log(e);
  //       setMode(0);
  //     }
  //   }}
  // }, []);

  
  const [keys, setKeys] = useState<Keys>({
    connection: false,
    DeclineHoodCommand: false,
    DoNothingCommand: false,
    ExtendClimberCommand: false,
    ledMode: 0,
    HoodCommand: false,
    InnerIndexCommand: false,
    IntakeCommand: false,
    KickOutBallsCommand: false,
    OneBallAuto: false,
    OuterIndexCommand: false,
    RaiseHoodCommand: false,
    RetractClimberCode: false,
    ShootCommand: false,
    SwerveCommand: false,
    routine: 0,
    P: 0,
    I: 0,
    D: 0,
    shooterMode: 0,
    batteryVoltage: 0,
    robotMode: 0,
  });

  const excludeKeysArr = [
    'connection',
    'ledMode',
    'routine',
    'P',
    'I',
    'D',
    'shooterMode',
    'batteryVoltage',
    'robotMode',
  ];


  

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios('http://127.0.0.1:8883/getstatuses');
  //       const data = await res.data;
  //       setKeys(res.data.data);
  //       console.log(data);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   setTimeout(() => {
  //     fetchData();
  //   }, 1000);
  // });

  return (
    <div className="w-screen h-screen bg-neutral-900 p-4 flex flex-col space-y-4">
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
                  keys.connection ? 'bg-green-500/20' : 'bg-amber-500/20'
                }  rounded-full mr-2`}
              >
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full ${
                    keys.connection ? 'bg-green-500' : 'bg-amber-500'
                  }`}
                />
              </div>
            </h1>
          </div>
        </div>
        <div className="">
          <button
            onClick={() => window.electron.ipcRenderer.openWebcam()}
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
      {/* <div className="grid grid-cols-2 mb-6 mt-2 gap-4 w-1/2">
        <InfoCard label="Robot IP" info="10.85.90.11" color="border-blue-500" />
        <InfoCard
          label="Battery Percentage"
          info={keys.batteryVoltage}
          color="border-teal-500"
        />
        <div className=" mb-6 mt-2 gap-4 w-1/2 flow-root">
        <div className="rounded-md border-neutral-700/60 flex flex-col col-span-2 float-right">
            <div className="flex justify-between flex-1">
              <h1 className="text-neutral-300 text-base font-normal flex items-center">
                Robot Statuses
                <button
                  type="button"
                  onClick={async () => {
                    try {
                      const res = await axios(
                        'http://127.0.0.1:8883/getstatuses'
                      );
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
              <div className="mt-4 absolute inset-0 overflow-y-auto space-y-4 pr-2 align-text-top">
                <StatusCard
                  label="DeclineHoodCommand"
                  status={keys.DeclineHoodCommand}
                /> 
                {Object.keys(keys).map((key: string) => {
                  if (excludeKeysArr.includes(key)) {
                    return <></>;
                  }
                  return (
                    <StatusCard
                      label={key}
                      key={key}
                      status={keys[key as keyof typeof keys]}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          </div> */}

        
        {/* <InfoCard
          label="Current Runtime"
          info={`${`0${Math.floor((time / 1000) % 60)}`.slice(-2)}:${`0${
            (time / 10) % 100
          }`.slice(-2)}`}
          color="border-emerald-500"
        /> */}
      {/* </div> */}
      {/* <div className="flex w-full flex-">
        <div className="grid grid-cols-2 w-full gap-6">
          <div className="col-span-1 flex flex-col">
            <h1 className="text-neutral-300 text-base font-normal">
              Current Runtime
            </h1>
            <div className="flex flex-1 mt-4 w-full">
              /* <div className="grid grid-cols-2 gap-4 w-full">
              <InfoCard
          label="Current Runtime"
          info={`${`0${Math.floor((time / 1000) % 60)}`.slice(-2)}:${`0${
            (time / 10) % 100
          }`.slice(-2)}`}
          color="border-emerald-500"
              />              
              </div> 
            </div>
          </div>
        </div>
        </div> */}
        <div className="flex w-full">
        <div className="grid grid-cols-1 w-full gap-0s">
          <div className="col-span-1 flex flex-col">
            <h1 className="text-neutral-300 text-base font-normal">
              Stopwatch
            </h1>
            <div className="flex flex-1 mt-4 w-full">
              <div className="grid grid-cols-2 gap-4 w-full">
              <TimerCard
          label="Teleop Countdown"
          info={`${`${Math.floor((time / 60000))}`.slice(-1)}:${`${Math.floor((time / 1000))%60}`.slice(-3)}:${`0${
            (time / 10) % 100
          }`.slice(-2)}`}
          color="border-emerald-500"
              /> 
                  <div className="w-auto h-fit bg-neutral-900 flex flex-col p-4">
      <div className="flex-1 w-auto h-auto relative flex items-center justify-center">
        <p className="absolute inset-0 text-white">Webcam camera feed</p>
        <img
          src="http://roborio-8590-frc.local:1181/stream.mjpg"
          // src="http://10.85.90.2:1181/stream.mjpg"
          className="w-auto h-3/4 relative z-10"
          alt="Webcam camera feed"
        />
      </div>
    </div>
             
              </div>
            </div>
          </div>
          </div>
          
          </div>
      <div className="flex w-full flex-">
        <div className="grid grid-cols-1 w-full gap-6">
          <div className="col-span-1 flex flex-col">
            <h1 className="text-neutral-300 text-base font-normal">
              Configuration
            </h1>
            <div className="flex flex-1 mt-4 w-full">
              <div className="grid grid-cols-2 gap-4 w-full h-full">
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
                {/* <ConfigurationCard
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
                  to="/pid" */}
                {/* /> */}
              </div>
            </div>
          </div>
        </div>
      <div className="w-screen h-screen bg-neutral-900 flex flex-col p-3 h-1/2 ml-7">
      {/* <Link to="/home" className="text-neutral-400 flex items-center">
        <FiArrowLeft className="text-neutral-400 mr-2" size={16} />
        Home
      </Link> */}
      <div className="pt-6">
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
            className="inline-block px-16 py-8 rounded-md bg-neutral-700 text-white"
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
            className="inline-block px-16 py-8 rounded-md bg-neutral-700 text-white"
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

      </div>
    </div>
  );
};

export default Home;
function fetchData() {
  throw new Error('Function not implemented.');
}

