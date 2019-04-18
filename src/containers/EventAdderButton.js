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
        Input
} from 'reactstrap';
import axios from 'axios'

class EventAdderButton extends Component {
    constructor(props){
    super(props);
    this.state = {
        modal: false,
        location:'',
        date:'',
        trip_id:''
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

handleDate = (e) =>{
    this.setState({
        date:e.target.value
    })
}

handleSubmit = (e) =>{
    console.log(this.state)
    let formData = new FormData()
    formData.set('date_time',this.state.date)
    formData.set('location',this.state.location)
    formData.set('parent_trip',this.state.trip_id.id)
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
                
                <div className="AddEventButton">
                    {/* <i onClick={this.toggle} class="fas fa-plus-circle">{this.props.buttonLabel}</i> */}
                    <Button onClick={this.toggle} color="success">Add event</Button>
                </div> 

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>New Event</ModalHeader>
                    
                    <ModalBody>
                    
                    <Form onSubmit={this.handleSubmit}>
                        
                        <FormGroup>
                            <Label for="eventName">Event Location:</Label>
                            <Input onChange={this.handleLocation} plaintext />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleDate">Date</Label>
                            <Input
                                type="date"
                                name="date"
                                id="exampleDate"
                                placeholder="date placeholder"
                                onChange={this.handleDate}
                            />
                        </FormGroup>

                        <ModalFooter>
                            <Button type="submit" color="primary" onClick={this.toggle}>Submit</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>

                    </Form>

                    </ModalBody>
                    
                </Modal>

            </div>
        );
    }
}

export default EventAdderButton;