import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import LimelightFeed from './pages/LimelightFeed/LimelightFeed';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LimelightFeed />} />
      </Routes>
    </Router>
  );
};

export default App;
