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
        CustomInput
} from 'reactstrap';
import axios from 'axios'

class EventCardContent extends Component {
    constructor(props) {
    super(props);
    this.state = {
      modal: false,
      event_name:'',
      desc:'',
      location:'',
      date:'',
      time:'',
      trip_id:''    
    };

    this.toggle = this.toggle.bind(this);
    this.changeDesc = this.changeDesc.bind(this);
    this.changeEventName = this.changeEventName.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
    this.changeDate = this.changeDate.bind(this);
    this.changeTime = this.changeTime.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/v1/users/"+localStorage.getItem('id')+"/trips")
    .then((result)=>{
      if(result.data.data.find(f => f.event_name === this.props.event_name)){
        this.setState({
            trip_id:result.data.data.find(f => f.event_name === this.props.event_name)
        })
    }
    })
  }

  changeEventName(e) {
    this.setState ({
      event_name: e.target.value
    })
  }

  changeLocation(e) {
    this.setState ({
      location: e.target.value
    })
  }

  changeDesc(e) {
    this.setState ({
      desc: e.target.value
    })
  }

  changeDate(e) {
    this.setState ({
      date: e.target.value
    })
  }

  changeTime(e) {
    this.setState ({
      time: e.target.value
    })
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    console.log(this.state)
    let formData = new FormData()
    formData.update('event_name',this.state.event_name)
    formData.update('date',this.state.date)
    formData.update('date',this.state.time)
    formData.update('location',this.state.location)
    formData.update('parent_trip',this.state.trip_id.id)
    formData.update('desc',this.state.desc)
    axios({
        method:"POST",
        url:"http://localhost:5000/api/v1/trip_events/<id>/edit",
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
        return (
            <div>
                <Button color="info" onClick={this.toggle} className="w-100">View Event Details</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>show/edit event</ModalHeader>
                    
                    <ModalBody>
                        
                        <Form onSubmit={this.handleSubmit}>

                          <FormGroup>
                              <Label for="eventDescription">Event Description</Label>
                              <Input 
                                type="textarea" 
                                name="desc" 
                                id="event-description" 
                                placeholder="edit your event's description"
                                onChange={this.changeDesc} />
                          </FormGroup>
                          
                            <FormGroup className="EventCardContent">
                              <Label for="eventName">Event Name</Label>
                              <Input 
                                type="text" 
                                name="event_name" 
                                id="event-name" 
                                placeholder="edit your event name" 
                                onChange={this.changeDesc} 
                                />
                            </FormGroup>

                            <FormGroup className="EventCardContent">
                              <Label for="eventLocation">Event Location</Label>
                              <Input 
                                type="location" 
                                name="location" 
                                id="event-location" 
                                placeholder="edit your event location" 
                                onChange={this.changeLocation} 
                                />
                            </FormGroup>

                            <FormGroup className="EventCardContent">
                              <Label for="eventDate">Event Date</Label>
                              <Input
                                type="date"
                                name="date"
                                id="event-date"
                                placeholder="change your event date"
                                onChange={this.changeDate}
                              />
                            </FormGroup>

                            <FormGroup className="EventCardContent">
                              <Label for="eventTime">Event Time</Label>
                              <Input
                                type="time"
                                name="time"
                                id="event-time"
                                placeholder="change your event time"
                                onChange={this.changeTime}
                              />
                            </FormGroup>

                            <FormGroup className="EventCardContent">
                              <Label for="eventFile">Event File Attachment</Label>
                              <CustomInput type="file" id="event-file" name="file" />
                            </FormGroup>

                            <FormGroup className="EventCardContent">
                              <Label for="eventPhotos">Event Photos</Label>
                              <CustomInput type="file" id="event-photos" name="image" />
                            </FormGroup>
                            
                          </Form>

                          <ModalFooter>
                            <Button type="submit" color="primary" onClick={this.toggle}>Submit</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                          </ModalFooter>
                          
                      </ModalBody>
                      
                </Modal>
            </div>
        );
    }
}

export default EventCardContent;
