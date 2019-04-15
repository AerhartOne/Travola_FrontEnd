import React from 'react';
import NavBar from '../containers/Navbar';
import SettingForm from '../containers/SettingForm';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';

import '../css/UserSetting.css'

export default class UserSettingPage extends React.Component{
    render(){
        return(
            <div>
                <NavBar />
                    <div className="InfoSetting">
                        <SettingForm />
                    </div>
            </div>
        )
    }
}