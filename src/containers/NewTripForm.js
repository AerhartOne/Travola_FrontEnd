import React from 'react'
import NavBar from '../containers/Navbar'
import {
    Container,
    Row,
    Col,
    Form, 
    FormGroup, 
    Label, 
    Input, 
    Button

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
            <Container id="container">
                <Row>
                    <Col>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label className="h4">Trip Name</Label>
                                <Input onChange={this.handleTripName}placeholder="Enter your trip name"/>
                            </FormGroup>
                            <FormGroup>
                                <Label className="h4">Country You Are Going</Label>
                                <Select
                                    options={this.state.options}
                                    value={this.state.value}
                                    onChange = {this.countryChangeHandle}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label className="h4">Duration Of The Trip</Label>
                            </FormGroup>
                            <Row form>
                                <Col md={6}>
                                <FormGroup>
                                    <Label className="h5">From</Label>
                                    <Input
                                        type="date"
                                        onChange={this.handleDateFrom}
                                    />
                                </FormGroup>
                                </Col>
                                <Col md={6}>
                                <FormGroup>
                                    <Label className="h5">To</Label>
                                    <Input
                                        type="date"
                                        onchange={this.handleDateTo}
                                    />
                                </FormGroup>
                                </Col>
                            </Row>
                            <Button type="submit" color="primary">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}