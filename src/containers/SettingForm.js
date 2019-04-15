import React from 'react'
import { 
        Container,
        Row,
        Col,
} from 'reactstrap'
import '../css/UserSetting.css'
import countryList from 'react-select-country-list'
import Select from 'react-select'



class SettingForm extends React.Component {
    constructor(props) {
        super (props);

        this.state = {
            first_name: '',
            last_name: '',
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
            <div className="setting-container">
                <Container>
                    <Row>
                        <Col>
                            <form className="setting-box " onSubmit={this.handleSubmit} id="details">
                                <h1 className="title">Update Basic Information</h1>

                                <div className="formfield">
                                    <label className="formfield_label h4">First Name</label>
                                    <input type="text" name="first_name" className="formfield_input" placeholder="Enter your new first name" value={this.state.first_name} onChange={this.handleChange} />
                                </div>

                                <div className="formfield">
                                    <label className="formfield_label h4">Last Name</label>
                                    <input type="text" name="last_name" className="formfield_input" placeholder="Enter your new last name" value={this.state.last_name} onChange={this.handleChange} />
                                </div>

                                <div className="formfield">
                                    <label className="formfield_label h4">Username</label>
                                    <input type="text" name="username" className="formfield_input" placeholder="Enter your new username" value={this.state.username} onChange={this.handleChange} />
                                </div>

                                <div clasName="formfield">
                                    <label className="formfield_label h4">Password</label>
                                    <input type="password" name="password" className="formfield_input" placeholder="Enter your new password" value={this.state.password} onChange={this.handleChange} />
                                </div>

                                <button type="submit" className="settingfield_button">Update</button>

                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}

export default SettingForm; 