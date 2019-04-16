import React from 'react'
import NavBar from '../containers/Navbar'
import Bar from '../containers/Bar'
import EventAdderButton from '../containers/EventAdderButton'

import '../css/dashboard.css'

export default class TripDashboard extends React.Component{
    render(){
        return(
            <div id="db-background">
            
            <NavBar/>
            
            <Bar/>

            <EventAdderButton/>
            
            </div>
        )
    }
}