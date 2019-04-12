import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
        } from 'reactstrap';
import logo from '../images/travola-logo.png';

export default class NavBar extends React.Component{
    render(){
        return(
            <>
                <Navbar className="fixed-top" color="light" light expand="md">
                    <NavbarBrand href="/username"><img src={ logo } alt="travola logo" width="20%"/></NavbarBrand>
                    <Nav className="ml-auto"navbar>
                    <NavItem>
                        <NavLink href="/username">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/username/profile">Profile</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/username/setting">Settings</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Logout</NavLink>
                    </NavItem>
                    </Nav>
                </Navbar>
            </>
        )
    }
}