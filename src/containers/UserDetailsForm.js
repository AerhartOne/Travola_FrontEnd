import React from 'react'
import { 
        Container,
        Row,
        Col,
} from 'reactstrap'
import '../css/UserDetailsForm.css'
import countryList from 'react-select-country-list'
import Select from 'react-select'

export default class UserDetailsForm extends React.Component{
    constructor(props) {
        super(props)

        this.options = countryList().getData()

        this.state = {
            options:this.options,
            value:null,
            first_name:"",
            last_name:"",
            gender:""
            
        }
        
    }
    countryChangeHandle = value => {
        this.setState({value})
    }
    
    handleChange=(e)=> {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        console.log(this.state)
    }
    render(){
        return(
            <div id="form-container">
            <Container>
                <Row>
                    <Col>
                        <form className="form-box" onSubmit={this.handleSubmit} id="details">
                        <legend className="display-4 d-flex justify-content-center legendcolor">User Detail Form</legend>
                            <div className="formfield">
                                <label className="formfield_label h4">first name</label>
                                <input name="first_name" type="text" className="formfield_input" placeholder="Enter your first name" value={this.state.first_name} onChange={this.handleChange}/>
                            </div>
                            <div className="formfield">
                                <label className="formfield_label h4">last name</label>
                                <input name="last_name" type="text" className="formfield_input" placeholder="Enter your last name" value={this.state.last_name} onChange={this.handleChange}/>
                            </div>
                            <div className="formfield">
                                <label className="formfield_label h4">Gender</label>
                                <select name="gender" className="formfield_select" onChange={this.handleChange} form="details">
                                    <option>--Select--</option>
                                    <option name="gender" value="Male">Male</option>
                                    <option name="gender" value="Female">Female</option>
                                </select>
                            </div>
                            <div className="formfield">
                                <label className="h4 formfield_label">Which country are you from ?</label>
                                <Select
                                    options={this.state.options}
                                    value={this.state.value}
                                    onChange = {this.countryChangeHandle}
                                />
                            </div>
                            <button type="submit" className="formfield_button">Submit</button>
                        </form>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}