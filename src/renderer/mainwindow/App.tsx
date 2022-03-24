import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Limelight from './pages/Limelight/Limelight';
import Autonomous from './pages/Autonomous/Autonomous';
import PID from './pages/PID/PID';
import Shooter from './pages/Shooter/Shooter';
import Login from './pages/Login/Login';

const App = () => {
  return (
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
  );
};

export default App;
