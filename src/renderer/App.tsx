import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Limelight from './pages/Limelight/Limelight';
import Login from './pages/Login/Login';
// import icon from '../../assets/icon.svg';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/limelight" exact component={Limelight} />
      </Switch>
    </Router>
  );
};

export default App;
