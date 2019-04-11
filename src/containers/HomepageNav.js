import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
        } from 'reactstrap';
import LogIn from '../containers/Login'

    export default class HomepageNav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        loginModal: false,
        };
    }

    toggleLogin = () => {
        this.setState({
            loginModal: !this.state.loginModal
        })
    }
    render() {
        const {loginModal} = this.state
        return (
        <div>
            <Navbar className="fixed-top" color="light" light expand="md">
            <NavbarBrand href="/">Travola</NavbarBrand>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink onClick={this.toggleLogin}>Log In</NavLink>
                </NavItem>
                </Nav>
            </Navbar>
            <LogIn loginModal={loginModal} toggleLogin={this.toggleLogin}/>
        </div>
        );
    }
}