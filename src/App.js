import React from 'react';
import './App.css';
import {Employee, Main} from './Employee.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <nav className="App-header">
          <ul className="Nav">
            <li >
              <Link to="/" className="whiteLink">Home</Link>
            </li>
            <li>
              <Link to="/safetyofficer" className="whiteLink">Safety Officer</Link>
            </li>
            <li>
              <Link to="/employee" className="whiteLink">Employee</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/safetyofficer">
            <Main />
          </Route>
          <Route path="/employee">
            <Employee id={3}/>
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}
function About() {
  return (
    <div className="About">
      <h2 className="PDPT">Post Disaster Personnel Tracker</h2>
      <p>
        Post Disaster Personnel Tracker (PDPT) is a service that aims to provide
        a way to account for the safety status and location of employees following
        some kind of emergency or disaster. Location and time is tracked via Bluetooth
        proximity sensing from Raspberry Pis located around the facility while safety
        status is either self-declared or declared by corresponding safety officers
        (fire wardens, managers, etc).

      </p>

    </div>
  );
}

export default App;
