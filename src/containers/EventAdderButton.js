import React, { Component } from 'react';

import {   
        Button, 
        Modal, 
        ModalHeader, 
        ModalBody, 
        ModalFooter,
        Form, 
        FormGroup,
        Input,
        InputGroup,
        InputGroupAddon,
        InputGroupText
} from 'reactstrap';
import axios from 'axios'
import ReactMapBoxG1, { Layer, Feature } from 'react-mapbox-gl';

class EventAdderButton extends Component {
    constructor(props){
    super(props);
    
    this.state = {
        modal: false,
        event_name: '',
        locationAddress:'',
        date_time:'',
        trip_id:'',
        desc:'',
        latitude: 0,
        longitude: 0
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

handleEventName = (e) => {
    this.setState({
        event_name: e.target.value
    })
}

handleLocation = (e) =>{
    this.setState({
        locationAddress:e.target.value
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

handleLocationSearch = (e) => {
    let query = document.getElementById('input-location').value
    console.log(query)
    console.log(this.state)
    let formData = new FormData()
    formData.set('location_search', query)
    axios.post( "http://localhost:5000/api/v1/maps/search", formData)
    .then( result => {
      console.log(result)
      this.setState({
        latitude: result.data.latitude, 
        longitude: result.data.longitude,
        locationAddress: result.data.address_short
      })
    })
  }

handleSubmit = (e) =>{
    e.preventDefault()
    console.log(this.state)
    let formData = new FormData()
    formData.set('event_name',this.state.event_name)
    formData.set('date_time',this.state.date_time)
    formData.set('location_address',this.state.locationAddress)
    formData.set('parent_trip',this.state.trip_id.id)
    formData.set('desc',this.state.desc)
    formData.set('latitude',this.state.latitude)
    formData.set('longitude',this.state.longitude)
    axios({
        method:"POST",
        url:"http://localhost:5000/api/v1/trip_events/new",
        data:formData,
        headers : {
            'Authorization': 'Bearer ' + localStorage.getItem('jwt_token'),
            'Content-Type':'multipart/form-data'
        }
    }).then(result => {
        this.props.parentPage.getAllTripData()
    })
}
    render() {
        const Map = ReactMapBoxG1( {accessToken: 'pk.eyJ1Ijoic3V6dWtpc3RldmVuIiwiYSI6ImNqdWpwcDhhYzFuczE0ZXAzamNkMWpvd2sifQ.PAW2yuz30KwTEL983iIN_g'} )
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
                                        <InputGroupText>Event Name</InputGroupText>
                                    </InputGroupAddon>
                                    <Input id="input-event-name" onChange={this.handleEventName} type="text" name="event_name" placeholder="Event Name" />
                                </InputGroup>
                            </FormGroup>

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
                                    <Input type="text" name="input-location" id="input-location" placeholder="Location" onChange={this.handleLocation} value={this.state.locationAddress}/>
                                </InputGroup>

                                    <Button type="button" onClick={this.handleLocationSearch} color="success" className="#">Search</Button>
                                    <Map style="mapbox://styles/mapbox/streets-v11" containerStyle={{width: "100%", height: "400px"}} center={[this.state.latitude, this.state.longitude]}>
                                        <Layer
                                        type="symbol"
                                        id="marker"
                                        layout={{ "icon-image": "marker-15" }}>
                                        <Feature coordinates={[this.state.latitude, this.state.longitude]}/>
                                        </Layer>
                                    </Map>
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