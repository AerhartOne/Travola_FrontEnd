import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
        } from 'reactstrap';
import "../css/Navbar.css";
import logo from '../images/travola-logo.png';
import profile from '../images/anonymous-user.png'

export default class NavBar extends React.Component{
    render(){
        return(
            <>
                {/* <Navbar className="fixed-top navcolor" color="light" light expand="md">
                    <NavbarBrand href="/username"><img src={ logo } alt="travola logo" width="20%"/></NavbarBrand>
                    <Nav className="ml-auto mr-2"navbar>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            <img src={profile} alt="avatar" width="25px" height="25px" className="rounded-circle"/>
                        </DropdownToggle>
                        <DropdownMenu right>
                        <DropdownItem href="/username">
                            Home
                        </DropdownItem>
                        <DropdownItem href="/username/profile">
                            Profile
                        </DropdownItem>
                        <DropdownItem href="/username/setting">
                            Account Setting
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                            Logout
                        </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    </Nav>
                </Navbar> */}
                <div className="header">
                
                    <div id="container">
                        <img src = { logo } alt="logo" width="20%"/>

                        <nav>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Home</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </>
        )
    }
}