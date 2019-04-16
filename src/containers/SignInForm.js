import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Route, Redirect } from 'react-router'


class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
            login:false,
            current_user:""
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

        let formData = new FormData()
        formData.set("username", this.state.username)
        formData.set("password", this.state.password)
        
        axios({
            method:"POST",
            url:"http://localhost:5000/api/v1/users/login",
            data:formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
        .then(result =>{
            if(result.data.status === true){
                console.log(result.data.data)
                console.log(result.data.status)
                this.setState({
                    login:true,
                    current_user:result.data.data.username
                    
                })
                localStorage.setItem('id', result.data.data.id)
            }else{
                alert("Wrong username or password")
            }
            
        })
        .catch(error =>{
            console.log(error.response)
            alert("Unsuccessful login")
        })
    }

    render() {
        return this.state.login ? (
            <Redirect push to={"/user/" +this.state.current_user}/>
        ) : (
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