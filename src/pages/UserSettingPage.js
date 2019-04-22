import React from 'react';
import NavBar from '../containers/Navbar';
import SettingForm from '../containers/SettingForm';
import  {
        Container
        } from 'reactstrap';

import '../css/UserSetting.css'

export default class UserSettingPage extends React.Component{
    render(){
        return(
            <Container fluid className="dashboard-container d-flex flex-column justify-content-center align-items-center px-0 py-0">
                <NavBar />
                    <div className="InfoSetting">
                        <SettingForm />
                    </div>
            </Container>
        )
    }
}