import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../images/travola-logo.png';
import homeimg from '../images/MacBook Design Mockup.png';
import '../css/HomePage.css'

import { 
    Button,
    Container,
    Col,
    Row
} from 'reactstrap'




export default class Homepage extends React.Component{
    render(){
        return(
            <Container fluid className="App mx-0 px-0 w-100 d-flex flex-row align-content-stretch justify-content-center">
                <Col className="App__Aside w-50 d-flex flex-column align-items-center justify-content-center text-center px-5">
                    {/* <div id="logo" >
                        <a href="/">
                            <img src={ logo } alt="Travola-Logo" width="40%" height="auto" />
                        </a>
                    </div> */}

                    <div id="homepage-tagline">
                        <h1 className='display-3'>
                            Travel planning made easier with
                        </h1>
                        <img className='img-fluid my-5' src={ logo } width="50%" height="auto"/>
                    </div>
                    
                    <div id="homepage-img">
                        <img className='img-fluid' src={ homeimg } alt="Macbook Mockup" height="auto" width="80%" />
                    </div>

                    <Button type="submit" color='info' size='lg' className='my-5 w-75'>Sign up now!</Button>

                </Col>

                <Col className="App__Form w-50 px-5">
                    <div className="PageSwitcher">
                        <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                        <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                    </div>
                    
                    <div className="FormTitle">
                        <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                    </div>

                    {this.props.children}
                </Col>
            </Container>
        );
    }
}