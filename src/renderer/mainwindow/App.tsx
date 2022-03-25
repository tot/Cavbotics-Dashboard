import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home';
import Limelight from './pages/Limelight/Limelight';
import Autonomous from './pages/Autonomous/Autonomous';
import PID from './pages/PID/PID';
import Shooter from './pages/Shooter/Shooter';
import Login from './pages/Login/Login';

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="limelight" element={<Limelight />} />
          <Route path="autonomous" element={<Autonomous />} />
          <Route path="shooter" element={<Shooter />} />
          <Route path="pid" element={<PID />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
