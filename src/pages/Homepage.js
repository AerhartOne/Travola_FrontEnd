import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../images/travola-logo.png';
import homeimg from '../images/MacBook Design Mockup.png';

import { Button } from 'reactstrap'




export default class Homepage extends React.Component{
    render(){
        return(
            
                
                <div className="App">

                    <div className="App__Aside">
                        
                        <div id="logo">
                            <a href="/">
                                <img src={ logo } alt="Travola-Logo" width="40%" height="auto" />
                            </a>
                        </div>
                        
                        <div id="homepage-img">
                            <img src={ homeimg } alt="Macbook Mockup" height="auto" width="80%" 
                            style={{paddingTop:"50px", paddingLeft:"40px", width:"600px"}}></img>
                        </div>

                        <div id="homepage-tagline">
                            <h1 style={{paddingLeft:"30px", paddingTop:"30px"}}>
                                Travel planning made easier with <img src={ logo } width="40%" height="auto" hspace="170"/>
                            </h1>

                            <Button type="submit" color='info' style={{marginLeft:"250px", marginTop:"10px"}}>Sign up now!</Button>
                        </div>

                    </div>

                    <div className="App__Form">
                        
                        <div className="PageSwitcher">
                            <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                            <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                        </div>
                        
                        <div className="FormTitle">
                            <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                        </div>

                        {this.props.children}
                        
                    </div>
                    
                </div>
                
        );
    }
}