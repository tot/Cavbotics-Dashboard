import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import Hello from './Hello';
// import icon from '../../assets/icon.svg';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
};

export default App;
