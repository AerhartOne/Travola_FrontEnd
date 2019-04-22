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

class EventCardContent extends Component {
    constructor(props) {
    super(props);
    this.state = {
      modal: false,
      // nestedModal: false,
      closeAll: false,
    };

    this.toggle = this.toggle.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }

  
  render() {
        return (
            <div>
                <Button color="info" onClick={this.toggle} className="w-100">View Event Details</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>show/edit event</ModalHeader>
                    
                    <ModalBody>
                        
                        <Form>

                        <FormGroup>
                            <Label for="eventDescription">Event Description</Label>
                            <Input type="textarea" name="text" id="event-description" />
                        </FormGroup>

                            <FormGroup className="EventCardContent">
                              <Label for="eventFile">Event File Attachment</Label>
                              <CustomInput type="file" id="event-file" name="file" />
                            </FormGroup>

                            <FormGroup className="EventCardContent">
                              <Label for="eventPhotos">Event Photos</Label>
                              <CustomInput type="file" id="event-photos" name="image" />
                            </FormGroup>
                          
                            <FormGroup className="EventCardContent">
                              <Label for="eventName">Event Name</Label>
                              <Input type="text" name="name" id="event-name" placeholder="edit your event name" />
                            </FormGroup>

                            <FormGroup className="EventCardContent">
                              <Label for="eventLocation">Event Location</Label>
                              <Input type="location" name="location" id="event-location" placeholder="edit your event location" />
                            </FormGroup>

                            <FormGroup className="EventCardContent">
                              <Label for="eventDate">Event Date</Label>
                              <Input
                                type="date"
                                name="date"
                                id="event-date"
                                placeholder="change your event date"
                              />
                            </FormGroup>

                            <FormGroup className="EventCardContent">
                              <Label for="eventTime">Event Time</Label>
                              <Input
                                type="time"
                                name="time"
                                id="event-time"
                                placeholder="change your event time"
                              />
                            </FormGroup>
                            
                          </Form>

                          <ModalFooter>
                            <Button type="submit" color="primary" onClick={this.toggle}>Submit</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                          </ModalFooter>
                          
                      </ModalBody>
                      
                      {/* <ModalFooter>
                      <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                      <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                      </ModalFooter>  */}
                      
                </Modal>
            </div>
        );
    }
}

export default EventCardContent;
