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
import logo from '../images/travola-logo.png';
import profile from '../images/anonymous-user.png'
import { Redirect } from 'react-router-dom'

export default class NavBar extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            isLogOut:false,
        }
    }

    logOut = (e) =>{
        localStorage.removeItem('id')
        this.setState({
            isLogOut:true,
        })
    }
    render(){
        return this.state.isLogOut?(
            <Redirect push to="/"/>
        ) : (
            <>
                <Navbar className="fixed-top" color="light" light expand="md">
                    <NavbarBrand><a href="/username"><img src={ logo } alt="travola logo" width="20%"/></a></NavbarBrand>
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
                        <DropdownItem onClick={this.logOut}>
                            Logout
                        </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    </Nav>
                </Navbar>
            </>
        );
    }
}