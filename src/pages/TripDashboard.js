import React from 'react'
import NavBar from '../containers/Navbar'
import SideBar from '../containers/SideBar'
import EventAdderButton from '../containers/EventAdderButton'

import '../css/dashboard.css'

export default class TripDashboard extends React.Component{
    render(){
        return(
            <div id="db-background">
            
            <NavBar/>
            
            <SideBar/>

            <EventAdderButton/>
            
            </div>
        )
    }
}