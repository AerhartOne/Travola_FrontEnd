import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
=======
import Homepage from './pages/Homepage'
>>>>>>> added jumbotron

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
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
=======
        <h1>Hello world</h1>
>>>>>>> added jumbotron
    );
  }
}

export default App;
