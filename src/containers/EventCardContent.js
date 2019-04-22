import React, { Component } from 'react';
import { 
        Button, 
        Container,
        CardTitle,
        CardSubtitle,
        CardText,
        Modal, 
        ModalHeader, 
        ModalBody, 
        ModalFooter,
        Form,
        FormGroup,
        Label, 
        Input,
        CustomInput,
        Row,
        Col
} from 'reactstrap';
import axios from 'axios'

class EventCardContent extends Component {
    constructor(props) {
    super(props);
    this.state = {
      files: [],
      photos: [],
      filesToUpload: [],
      photosToUpload: [],
      event_name:'',
      desc:'',
      date_time:'',
      location:'',
      modal: false,
      editMode: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.changeDesc = this.changeDesc.bind(this);
    this.changeEventName = this.changeEventName.bind(this);
    this.changeLocation = this.changeLocation.bind(this);
    this.changeDateTime = this.changeDateTime.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggleEditMode() {
    this.setState(prevState => ({
      editMode: !prevState.editMode
    }));
  }

  componentDidMount() {
    this.populateFieldsFromPropsTripEvent()
  }

  getFiles() {
    axios.get("http://localhost:5000/api/v1/trip_events/" + this.props.tripEvent.id + "/files")
    .then(result => {
      this.setState({
        files: result.data.data
      })
    })
  }

  getPhotos() {
    axios.get("http://localhost:5000/api/v1/trip_events/" + this.props.tripEvent.id + "/photos")
    .then(result => {
      this.setState({
        photos: result.data.data
      })
    })
  }

  populateFieldsFromPropsTripEvent() {
    this.setState({
      event_name: this.props.tripEvent.event_name,
      desc: this.props.tripEvent.desc,
      location: this.props.tripEvent.location,
      date_time: this.props.tripEvent.date_time
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

  changeDateTime(e) {
    this.setState ({
      date_time: e.target.value
    })
  }

  handleFileUploadChange = (e) => {
    let lastFileIndex = e.target.files.length - 1
    if (e.target.files[lastFileIndex] !== undefined) {
      let newFileList = this.state.filesToUpload
      newFileList.push(e.target.files[lastFileIndex])
      this.setState({
        files: newFileList
      })
      console.log(this.state.filesToUpload)
    }
  }

  handlePhotoUploadChange = (e) => {
    let lastFileIndex = e.target.files.length - 1
    if (e.target.files[lastFileIndex] !== undefined) {
      let newPhotoList = this.state.photosToUpload
      newPhotoList.push(e.target.files[lastFileIndex])
      this.setState({
        photos: newPhotoList
      })
      console.log(this.state.filesToUpload)
    }
  }

  handleSubmit = (e) =>{
    e.preventDefault()
    let jwt_token = localStorage.getItem('jwt_token')
    console.log(this.state)
    let formData = new FormData()
    formData.set('event_name',this.state.event_name)
    formData.set('date_time',this.state.date_time)
    formData.set('location',this.state.location)
    formData.set('desc',this.state.desc)

    axios({
        method:"POST",
        url:"http://localhost:5000/api/v1/trip_events/" + this.props.tripEvent.id + "/edit",
        data:formData,
        headers : {
            'Authorization': 'Bearer ' + jwt_token,
            'Content-Type':'multipart/form-data'
        }
    }).then(result => {
      this.setState({modal: false})
      this.props.parentPage.getAllTripData()
    })
}

  render() {
    const {files, photos, filesToUpload, photosToUpload, event_name, desc, date_time, location, modal} = this.state
      return (
        <>
        <Button color="info" onClick={this.toggleModal} className="w-100">View Event Details</Button>

        <Modal isOpen={modal} toggle={this.toggleModal} className={this.props.className}>
          <ModalHeader toggle={this.toggleModal}> <CardTitle>{event_name}</CardTitle> </ModalHeader>
            
        <Form onSubmit={this.handleSubmit}>
          <ModalBody>
            { this.state.editMode ?
              <>
              <FormGroup className="EventCardContent">
                <Label for="eventName">Event Name</Label>
                <Input type="text" name="event_name" id="event-name" placeholder="Event Name" onChange={this.changeEventName} value={event_name} />
              </FormGroup>

              <FormGroup>
                <Label for="eventDescription">Description</Label>
                <Input type="textarea" name="desc" id="event-description" placeholder="Description" onChange={this.changeDesc} value={desc}/>
              </FormGroup>

              <FormGroup className="EventCardContent">
                <Label for="eventLocation">Location</Label>
                <Input type="location" name="location" id="event-location" placeholder="Location" onChange={this.changeLocation} value={location}/>
              </FormGroup>

              <FormGroup className="EventCardContent">
                <Label for="eventDate">Date/Time</Label>
                <Input type="datetime-local" name="date" id="event-date" placeholder="Event Date" onChange={this.changeDateTime} value={date_time} />
              </FormGroup>

              <FormGroup className="EventCardContent">
                <Label for="eventFile">Attach files:</Label>
                <CustomInput type="file" id="event-file" name="file" onChange={this.handleFileUploadChange} />
              </FormGroup>

              <Container>
                <Label>Selected files:</Label>
                <ul>
                  { filesToUpload.map(f =>
                    <li key={f.name}>{f.name}</li>
                  )}
                </ul>
              </Container>

              <FormGroup className="EventCardContent">
                <Label for="eventPhotos">Event Photos</Label>
                <CustomInput type="file" id="event-photos" name="image" onChange={this.handlePhotoUploadChange} />
              </FormGroup>

              <Container>
                <Label>Selected photos:</Label>
                <ul>
                  { photosToUpload.map(p =>
                    <li key={p.name}>{p.name}</li>
                  )}
                </ul>
              </Container>
              </>
            :
              <>
                <CardSubtitle>Date/Time: {date_time}</CardSubtitle>
                { location ? <CardSubtitle>At: {location}</CardSubtitle> : null }
                { desc ? <CardText className='my-3'>Description: {desc}</CardText> : null }
                <Container fluid className='text-center mt-3'>
                    <Row>
                      <Col>
                        <CardSubtitle>Files Uploaded</CardSubtitle>
                        <ul>
                          { files.map(f =>
                            <li key={f.name}>{f.name}</li>
                          )}
                        </ul>
                      </Col>

                      <Col>
                        <CardSubtitle>Photos Uploaded</CardSubtitle>
                        <ul>
                          { photos.map(p =>
                            <li key={p.name}>{p.name}</li>
                          )}
                        </ul>
                      </Col>
                    </Row>
                </Container>
              </>
            }
        </ModalBody>


        <ModalFooter>
          { this.state.editMode ? 
            <>
            <Button type="submit" color="primary" onClick={this.handleSubmit}>Save</Button>
            <Button color="secondary" onClick={this.toggleEditMode}>Cancel</Button>
            </>
          :
            <>
            <Button type="button" color="primary" onClick={this.toggleModal}>Close</Button>
            <Button color="secondary" onClick={this.toggleEditMode}>Edit</Button>
            </>
          }
        </ModalFooter>
      </Form>
              
      </Modal>
      </>
    );
  }
}

export default EventCardContent;
