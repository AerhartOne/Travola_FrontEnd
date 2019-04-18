import React from 'react'
import { 
        Container,
        Row,
        Col,
} from 'reactstrap'
import '../css/UserSetting.css'
import '../css/NewTripForm.css'



class SettingForm extends React.Component {
    constructor(props) {
        super (props);

        this.state = {
            first_name: '',
            last_name: '',
            username: '',
            password: '',
            bio:''
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
        
        this.setState({
            first_name: '',
            last_name: '',
            username: '',
            password: '',
            bio:''

        })
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
                                <h1 className="display-1 title">Edit Account Information</h1>

                                <div className="formfield">
                                    <input type="text" name="username" className="formfield_input" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                                </div>

                                <div className="formfield">
                                    <input type="email" name="email" className="formfield_input" placeholder="Email" value={this.state.password} onChange={this.handleChange} />
                                </div>

                                <div className="formfield">
                                    <input type="password" name="password" className="formfield_input" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                                </div>

                                <Container fluid className="px-0 w-100">
                                    <Row>
                                        <Col>
                                            <div className="formfield">
                                                <input type="text" name="first_name" className="formfield_input" placeholder="First Name" value={this.state.first_name} onChange={this.handleChange} />
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="formfield">
                                                <input type="text" name="last_name" className="formfield_input" placeholder="Last Name" value={this.state.last_name} onChange={this.handleChange} />
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>

                                <div className="formfield">
                                    <input type="textarea" name="bio" className="formfield_input" placeholder="Write a little about yourself." value={this.state.bio} onChange={this.handleChange} />
                                </div>

                                <button type="submit" onClick={this.handleSubmit} className="settingfield_button w-100">Save details</button>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}

export default SettingForm; 