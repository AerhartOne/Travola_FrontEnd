import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
        let formData = new FormData()
        formData.set("username", this.state.username)
        formData.set("password", this.state.username)
        
        axios({
            method:"POST",
            url:"http://localhost:5000/api/v1/users/login",
            data:formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" >
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="email">Username</label>
                    <input type="text" id="name" className="FormField__Input" placeholder="Enter your username" name="username" value={this.state.username} onChange={this.handleChange} />
                </div>

                <div className="FormField">
                    <label className="FormField__Label" htmlFor="password">Password</label>
                    <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                </div>

                <div className="FormField">
                    <button type="submit" className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
                </div>
            </form>
        </div>
        );
    }
}

export default SignInForm;