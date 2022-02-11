import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import Hello from './Hello';
import Login from './pages/Login/Login';
// import icon from '../../assets/icon.svg';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" component={Hello} />
      </Switch>
    </Router>
  );
};

export default App;
