import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import UserHomepage from './pages/UserHomepage';
import UserProfilePage from './pages/UserProfilePage';
import UserSettingPage from './pages/UserSettingPage';
import TripDashboard from './pages/TripDashboard';
import SignInForm from './containers/SignInForm';
import SignUpForm from './containers/SignUpForm';


class App extends Component {
  constructor(props) {
    super(props)

    this.state={
      
    }
  }
  
  
  render() {
    return (
      <>
        <Router>
          <Route exact strict path = "/"
            component = {props => {
              return (
                <Homepage
                {...props}
                >
                  <SignUpForm/>    
                </Homepage>
              )
            }}
            />
          <Route exact strict path="/sign-in"
            component = {props => {
              return (
                <Homepage
                {...props}
                >
                  <SignInForm/>     
                </Homepage>
              )
            }}
          />
          <Route exact strict path = "/user/:username"
            component = {props => {
              return (
                <UserHomepage
                {...props}
                />
              )
            }}
            />
            <Route exact strict path = "/user/:username/profile"
            component = {props => {
              return (
                <UserProfilePage
                {...props}
                />
              )
            }}
            />
            <Route exact strict path = "/user/:username/setting"
            component = {props => {
              return (
                <UserSettingPage
                {...props}
                />
              )
            }}
            />
            <Route exact strict path = "/user/:username/dashboard/:trip_name"
            component = {props => {
              return (
                <TripDashboard
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