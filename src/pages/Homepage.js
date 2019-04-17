import React from 'react'
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import logo from '../images/travola-logo.png';


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