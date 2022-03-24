import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="w-screen h-screen bg-neutral-800 text-white flex justify-center items-center text-center">
      <div>
        <div className="text-2xl text-neutral-400">
          <span className="font-semibold text-white">Cav</span>Comms
        </div>
        <div className="connect">
          <Link to="/home" className="text-green-500">
            Connect to Robot
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
