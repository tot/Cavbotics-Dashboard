import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import WebcamFeed from './pages/WebcamFeed/WebcamFeed';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WebcamFeed />} />
      </Routes>
    </Router>
  );
};

export default App;
