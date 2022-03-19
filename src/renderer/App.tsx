import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Limelight from './pages/Limelight/Limelight';
import Autonomous from './pages/Autonomous/Autonomous';
import PID from './pages/PID/PID';
import Shooter from './pages/Shooter/Shooter';
import Login from './pages/Login/Login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/limelight" exact component={Limelight} />
        <Route path="/autonomous" exact component={Autonomous} />
        <Route path="/shooter" exact component={Shooter} />
        <Route path="/pid" exact component={PID} />
      </Switch>
    </Router>
  );
};

export default App;
