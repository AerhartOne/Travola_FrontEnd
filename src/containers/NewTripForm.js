import React from 'react'
import NavBar from '../containers/Navbar'
import {
    Container,
    Row,
    Col,
    Input, 

}from 'reactstrap'
import countryList from 'react-select-country-list'
import Select from 'react-select'
import '../css/NewTripForm.css'


export default class NewTripForm extends React.Component{
    constructor(props) {
        super(props)

        this.options = countryList().getData()

        this.state = {
            options:this.options,
            value:null,
            tripName:"",
            date_from:"",
            date_to:"",
        }
    }

    countryChangeHandle = value => {
        this.setState({value})
    }

    handleTripName = (e) => {
        this.setState({
            tripName : e.target.value
        })
    }
    handleDateFrom = (e) => {
        this.setState({
            date_from : e.target.value
        })
    }

    handleDateTo = (e) => {
        this.setState({
            date_to : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    render(){
        return(
            <>
            <NavBar/>
            <div className="bodybackground">
            <Container id="container">
                <Row>
                    <Col>
                        <form onSubmit={this.handleSubmit} className="form_fields">
                            <div className="formfield">
                                <label className="formfield_label h4">Trip Name</label>
                                <input className="formfield_input"onChange={this.handleTripName}placeholder="Enter your trip name"/>
                            </div>
                            <div className="formfield">
                                <label className="h4 formfield_label">Country You Are Going</label>
                                <Select
                                    options={this.state.options}
                                    value={this.state.value}
                                    onChange = {this.countryChangeHandle}
                                />
                                
                            </div>
                            <div className="formfield">
                                <label className="h4 formfield_label">Duration Of The Trip</label>
                            </div>
                            <Row form>
                                <Col md={6}>
                                <div className="formfield">
                                    <label className="h5 formfield_label">From</label>
                                    <input
                                        className="formfield_input"
                                        type="date"
                                        onChange={this.handleDateFrom}
                                    />
                                </div>
                                </Col>
                                <Col md={6}>
                                <div className="formfield">
                                    <label className="h5 formfield_label">To</label>
                                    <input
                                        className="formfield_input"
                                        type="date"
                                        onchange={this.handleDateTo}
                                    />
                                </div>
                                </Col>
                            </Row>
                            <button type="submit" className="formfield_button">Submit</button>
                        </form>
                    </Col>
                </Row>
            </Container>
            </div>
            </>
        )
    }
}