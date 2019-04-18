import React, { Component } from 'react';

import {   
        Button, 
        Modal, 
        ModalHeader, 
        ModalBody, 
        ModalFooter,
        Form, 
        FormGroup, 
        Label, 
        Input,
        InputGroup,
        InputGroupAddon,
        InputGroupText
} from 'reactstrap';
import axios from 'axios'

class EventAdderButton extends Component {
    constructor(props){
    super(props);
    this.state = {
        modal: false,
        location:'',
        date_time:'',
        trip_id:'',
        desc:''
    };

    this.toggle = this.toggle.bind(this);
}
componentDidMount(){
    axios.get("http://localhost:5000/api/v1/users/"+localStorage.getItem('id')+"/trips")
    .then((result)=>{
        if(result.data.data.find(f => f.trip_name === this.props.trip_name)){
            this.setState({
                trip_id:result.data.data.find(f => f.trip_name === this.props.trip_name)
            })
        }
        
    })
}
toggle() {
    this.setState(prevState => ({
        modal: !prevState.modal
    }));
}
handleLocation = (e) =>{
    this.setState({
        location:e.target.value
    })
}

handleDesc = (e) =>{
    this.setState({
        desc:e.target.value
    })
}

handleDate = (e) =>{
    this.setState({
        date_time:e.target.value
    })
}

handleSubmit = (e) =>{
    console.log(this.state)
    let formData = new FormData()
    formData.set('date_time',this.state.date_time)
    formData.set('location',this.state.location)
    formData.set('parent_trip',this.state.trip_id.id)
    formData.set('desc',this.state.desc)
    axios({
        method:"POST",
        url:"http://localhost:5000/api/v1/trip_events/new",
        data:formData,
        config:{ headers : {'Content-Type':'multipart/form-data'}}
    })
}
    render() {
        return (
            <div>
                
                <div className="AddEventButton px-0 py-0">
                    {/* <i onClick={this.toggle} class="fas fa-plus-circle">{this.props.buttonLabel}</i> */}
                    <Button onClick={this.toggle} color="success">Add Event</Button>
                </div> 

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>New Event</ModalHeader>
                    
                    <Form onSubmit={this.handleSubmit}>
                        <ModalBody>        
                            <FormGroup>
                                <InputGroup size="lg">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>Date</InputGroupText>
                                    </InputGroupAddon>
                                    <Input id="input-date" onChange={this.handleDate} type="datetime-local" name="date_time" placeholder="date placeholder" />
                                </InputGroup>
                            </FormGroup>

                            <FormGroup>
                                <InputGroup size="lg">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>Location</InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="text" id="input-location" onChange={this.handleLocation} />
                                </InputGroup>
                            </FormGroup>

                            <FormGroup>
                                <InputGroup size="lg">
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>Description</InputGroupText>
                                    </InputGroupAddon>
                                    <Input type="textarea" id="input-desc" onChange={this.handleDesc} />
                                </InputGroup>
                            </FormGroup>
                            
                        </ModalBody>

                        <ModalFooter>
                            <Button type="submit" color="primary" onClick={this.toggle}>Submit</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Form>
                </Modal>

            </div>
        );
    }
}

export default EventAdderButton;