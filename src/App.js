import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import NavBar from './containers/Navbar';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Route exact strict path = "/"
            component = {props => {
              return (
                <Homepage
                {...props}
                />
              )
            }}
            />
          <Route exact strict path = "/nav"
            component = {props => {
              return (
                <NavBar
                {...props}
                />
              )
            }}
            />
        </Router>
      </>
    );
  }
}

export default App;
