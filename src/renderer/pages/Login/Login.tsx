import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <div className="text-2xl">Cavbotics #8590</div>
      <div className="connect">
        <Link to="/home">Connect to Robot</Link>
      </div>
    </div>
  );
};

export default Login;
