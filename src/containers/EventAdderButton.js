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
        FormText 
} from 'reactstrap';

class EventAdderButton extends Component {
    constructor(props){
    super(props);
    this.state = {
        modal: false
    };

    this.toggle = this.toggle.bind(this);
}

toggle() {
    this.setState(prevState => ({
        modal: !prevState.modal
    }));
}
    
    render() {
        return (
            <div>
                
                <div className="addevent-btn">
                    <i onClick={this.toggle} class="fas fa-plus-circle">{this.props.buttonLabel}</i>
                </div> 
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>New Event</ModalHeader>
                    
                    <ModalBody>
                    
                    <Form>
                        
                        <FormGroup>
                            <Label for="eventName">Event Name:</Label>
                            <Input plaintext />
                        </FormGroup>

                        <FormGroup>
                            <Label for="exampleDate">Date</Label>
                            <Input
                                type="date"
                                name="date"
                                id="exampleDate"
                                placeholder="date placeholder"
                            />
                        </FormGroup>

                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Submit</Button>{' '}
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