import React from 'react';
import './App.css';
import {Ship, Main} from './ShipIndex.js';
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
              <Link to="/shipindex" className="whiteLink">Ship Index</Link>
            </li>
            <li>
              <Link to="/addship" className="whiteLink">Add Ship</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/shipindex">
            <Main />
          </Route>
          <Route path="/addship">
            <About />
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
      <h2 className="SWSI">Star Wars Ship Index</h2>
      <p>
        Star Wars Ship Index (SWSI) is a simple interface to 
        look at a few bits of trivia on the various space 
        ships of the Star Wars Universe. The technology behind
        this is simply a React/React-Router front end querying
        a MySQL database to display the appropriate information.

      </p>

    </div>
  );
}

export default App;
