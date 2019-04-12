import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
        } from 'reactstrap';

export default class NavBar extends React.Component{
    render(){
        return(
            <>
                <Navbar className="fixed-top" color="light" light expand="md">
                    <NavbarBrand href="/">Travola</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Profile</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Settings</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Log out</NavLink>
                    </NavItem>
                    </Nav>
                </Navbar>
            </>
        )
    }
}