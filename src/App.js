import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Route path = "/"
            component = {props => {
              return (
                <Homepage
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
