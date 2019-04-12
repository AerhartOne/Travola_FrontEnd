import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import UserHomepage from './pages/UserHomepage';
import UserProfilePage from './pages/UserProfilePage';
import UserSettingPage from './pages/UserSettingPage';



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
          <Route exact strict path = "/username"
            component = {props => {
              return (
                <UserHomepage
                {...props}
                />
              )
            }}
            />
            <Route exact strict path = "/username/profile"
            component = {props => {
              return (
                <UserProfilePage
                {...props}
                />
              )
            }}
            />
            <Route exact strict path = "/username/setting"
            component = {props => {
              return (
                <UserSettingPage
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
