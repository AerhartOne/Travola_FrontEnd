import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios'


class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            username: '',
            hasAgreed: false,
            first_name:"",
            last_name:"",
            signedUp:false
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
        formData.set('email', this.state.email)
        formData.set("password", this.state.password)
        formData.set("re_password", this.state.password)
        formData.set("username", this.state.username)
        formData.set("first_name", this.state.first_name)
        formData.set("last_name", this.state.last_name)
        axios({
            method:"POST",
            url:"http://localhost:5000/api/v1/users/",
            data:formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        }).then((result)=>{
            if(result.data.status){
                this.setState({signedUp: true})
            }
        })
        
    }

    render() {
        const { email, password, username, first_name, last_name, hasAgreed, signedUp } = this.state
        if (signedUp) {
            return (<Redirect to="/sign-in"/>)
        }
        return (
            <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormFields">
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">First Name</label>
                        <input type="text" id="name" className="FormField__Input" placeholder="Enter Your First Name" name="first_name" value={this.state.first_name} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Last Name</label>
                        <input type="text" id="name" className="FormField__Input" placeholder="Enter Your Last Name" name="last_name" value={this.state.last_name} onChange={this.handleChange} />
                    </div>
                    
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="name">Username</label>
                        <input type="text" id="name" className="FormField__Input" placeholder="Enter Your Username" name="username" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <label className="FormField__CheckboxLabel">
                            <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> I agree all statements in <a href="#" className="FormField__TermsLink">terms of service</a>
                        </label>
                        </div>

                    {email && password && username && hasAgreed && first_name && last_name ?
                        <div className="FormField">
                            <button type="submit" className="FormField__Button mr-20" href="/sign-in">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
                        </div> :
                        <div className="FormField">
                            <button type="submit"  disabled className="FormField__Button mr-20" href="/sign-in">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
                        </div> 
                    }

                </form>

            </div>
        );
    }
}

export default SignUpForm;