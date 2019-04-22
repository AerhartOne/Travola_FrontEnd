import React from 'react'
import { 
        Container,
        Row,
        Col,
} from 'reactstrap'
import '../css/UserSetting.css'
import '../css/NewTripForm.css'
import Axios from 'axios';



class SettingForm extends React.Component {
    constructor(props) {
        super (props);

        this.state = {
            username: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            bioText: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.getUserData()
    }

    getUserData() {
        let user_id = localStorage.getItem('id')
        Axios.get("http://localhost:5000/api/v1/users/"+user_id)
        .then( result => {
            let returned_data = result.data.data
            console.log(returned_data)
            this.setState({ 
                username: returned_data.username,
                email: returned_data.email,
                firstName: returned_data.first_name,
                lastName: returned_data.last_name,
                bioText: returned_data.bio_text,
            })
        })
    }

    handleChange(e) {
        let target = e.target;
        let name = target.name;

        this.setState({
            [name]: target.value
        });
        console.log(this.state)
    }

    handleSubmit(e) {
        e.preventDefault();
        let formData = new FormData()

        formData.append('user_id', localStorage.getItem('id'))
        formData.append('username', this.state.username)
        formData.append('email', this.state.email)
        formData.append('password', this.state.password)
        formData.append('first_name', this.state.firstName)
        formData.append('last_name', this.state.lastName)
        formData.append('bio_text', this.state.bioText)

        Axios.post("http://localhost:5000/api/v1/users/edit", formData, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('jwt_token'),
                'Content-Type': 'multipart/form-data'
            }
        }).then(result => {
            console.log('The form was submitted with the following data:');
            console.log(this.state);
            this.getUserData()
        })
        
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
                                    <input id='input-username' type="text" name="username" className="formfield_input" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                                </div>

                                <div className="formfield">
                                    <input id='input-email' type="email" name="email" className="formfield_input" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                                </div>

                                <div className="formfield">
                                    <input id='input-password' type="password" name="password" className="formfield_input" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                                </div>

                                <Container fluid className="px-0 w-100">
                                    <Row>
                                        <Col>
                                            <div className="formfield">
                                                <input id='input-first-name' type="text" name="firstName" className="formfield_input" placeholder="First Name" value={this.state.firstName} onChange={this.handleChange} />
                                            </div>
                                        </Col>
                                        <Col>
                                            <div className="formfield">
                                                <input id='input-last_name' type="text" name="lastName" className="formfield_input" placeholder="Last Name" value={this.state.lastName} onChange={this.handleChange} />
                                            </div>
                                        </Col>
                                    </Row> 
                                </Container>

                                <div className="formfield">
                                    <input id='input-bio-text' type="textarea" name="bioText" className="formfield_input" placeholder="Write a little about yourself." value={this.state.bioText} onChange={this.handleChange} />
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