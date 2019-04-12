import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SettingForm extends Component {
    constructor() {
        super ();

        this.state = {
            name: '',
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
    }


    render() {
        return (
            
            <div className="SettingCenter">
                
                <form onSubmit={this.handleSubmit} className="SettingFields" onSubmit={this.handleSubmit}>
                    
                    <div className="SettingField">
                        <label className="SettingField_Lable" htmlFor="Name">Change Name</label>
                        <input type="name" id="name" className="SettingField__Input" placeholder="Enter your new name" name="name" value={this.state.name} onChange={this.handleChange} />
                    </div>

                    <div className="SettingField">
                        <label className="SettingField_Lable" htmlFor="Username">Change Username</label>
                        <input type="name" id="username" className="SettingField__Input" placeholder="Enter your new username" name="username" value={this.state.username} 
                        onChange={this.handleChange} />
                    </div>

                    <div className="SettingField">
                        <label className="SettingField_Lable" htmlFor="Password">Change Password</label>
                        <input type="password" id="password" className="SettingField__Input" placeholder="Enter your new password" name="password" value={this.state.password} 
                        onChange={this.handleChange} />
                    </div>

                    <div className="SettingField">
                        <button className="SettingField__Button mr-20">Update</button>
                    </div>

                </form>

            </div>
        )
    }
}

export default SettingForm; 