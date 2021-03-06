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
import '../css/EventCardContent.css'
import ReactMapBoxG1, { Layer, Feature } from 'react-mapbox-gl';

class EventCardContent extends Component {
    constructor(props) {
    super(props);
    this.state = {
      files: [],
      photos: [],
      fileToUpload: undefined,
      photoToUpload: undefined,
      eventName:'',
      desc:'',
      dateTime:'',
      dateTimeLocal:'',
      locationAddress:'',
      modal: false,
      editMode: false,
      latitude: 0,
      longitude: 0
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
    this.getFiles()
    this.getPhotos()
  }

  getFiles() {
    axios.get("http://localhost:5000/api/v1/trip_events/" + this.props.tripEvent.id + "/files")
    .then(result => {
      this.setState({
        files: result.data.data
      })
      console.log(this.state)
    })
  }

  getPhotos() {
    axios.get("http://localhost:5000/api/v1/trip_events/" + this.props.tripEvent.id + "/photos")
    .then(result => {
      this.setState({
        photos: result.data.data
      })
      console.log(this.state)
    })
  }

  // getLocation() {
  //   axios.get("http://localhost:5000/api/v1/maps" + )
  // }

  populateFieldsFromPropsTripEvent() {
    this.setState({
      eventName: this.props.tripEvent.event_name,
      desc: this.props.tripEvent.desc,
      locationAddress: this.props.tripEvent.location_address,
      dateTime: this.props.tripEvent.date_time,
      dateTimeLocal: this.props.tripEvent.date_time_local,
      latitude: this.props.tripEvent.latitude,
      longitude: this.props.tripEvent.longitude
    })
    console.log(this.state)
  }

  changeEventName(e) {
    this.setState ({
      eventName: e.target.value
    })
  }

  changeLocation(e) {
    this.setState ({
      locationAddress: e.target.value
    })
  }

  changeDesc(e) {
    this.setState ({
      desc: e.target.value
    })
  }

  changeDateTime(e) {
    this.setState ({
      dateTime: e.target.value,
      dateTimeLocal: e.target.value
    })
  }

  handleFileUploadChange = (e) => {
    if (e.target.files[0] !== undefined) {
      this.setState({
        fileToUpload: e.target.files[0]
      })
    }
  }

  handlePhotoUploadChange = (e) => {
    if (e.target.files[0] !== undefined) {
      this.setState({
        photoToUpload: e.target.files[0]
      })
      console.log(this.state.filesToUpload)
    }
  }

  handleLocationSearch = (e) => {
    let query = document.getElementById('event-location').value
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
    let jwt_token = localStorage.getItem('jwt_token')
    console.log(this.state)
    let formData = new FormData()
    formData.set('event_name',this.state.eventName)
    formData.set('date_time',this.state.dateTime)
    formData.set('location_address',this.state.locationAddress)
    formData.set('desc',this.state.desc)
    formData.set('latitude',this.state.latitude)
    formData.set('longitude',this.state.longitude)

    let fileData = new FormData()
    fileData.set('file', this.state.fileToUpload)

    let photoData = new FormData()
    photoData.set('photo', this.state.photoToUpload)

    Promise.all([
      axios({
          method:"POST",
          url:"http://localhost:5000/api/v1/trip_events/" + this.props.tripEvent.id + "/edit",
          data:formData,
          headers : {
              'Authorization': 'Bearer ' + jwt_token,
              'Content-Type':'multipart/form-data'
          }
      }),
      axios({
        method:"POST",
        url:"http://localhost:5000/api/v1/trip_events/" + this.props.tripEvent.id + "/files/new",
        data:fileData,
        headers : {
            'Authorization': 'Bearer ' + jwt_token,
            'Content-Type':'multipart/form-data'
        }
      }),
      axios({
        method:"POST",
        url:"http://localhost:5000/api/v1/trip_events/" + this.props.tripEvent.id + "/photos/new",
        data:photoData,
        headers : {
            'Authorization': 'Bearer ' + jwt_token,
            'Content-Type':'multipart/form-data'
        }
      })
    ]).then(result => {
      this.setState({modal: false})
      this.props.parentPage.getAllTripData()
    })
}

  render() {
    const {files, photos, fileToUpload, photoToUpload, eventName, desc, dateTime, dateTimeLocal, locationAddress, modal, editMode} = this.state
    const Map = ReactMapBoxG1( {accessToken: 'pk.eyJ1Ijoic3V6dWtpc3RldmVuIiwiYSI6ImNqdWpwcDhhYzFuczE0ZXAzamNkMWpvd2sifQ.PAW2yuz30KwTEL983iIN_g'} )
      return (
        <>
        <Button color="info" onClick={this.toggleModal} className="w-100">View Event Details</Button>
        <Modal isOpen={modal} toggle={this.toggleModal} className={this.props.className}>
          <ModalHeader toggle={this.toggleModal}> 
          
          <CardTitle>{eventName}</CardTitle>
          
          </ModalHeader>
            
        <Form onSubmit={this.handleSubmit}>
          <ModalBody>
            { this.state.editMode ?
              <>
              <FormGroup className="EventCardContent">
                <Label for="eventName">Event Name</Label>
                <Input type="text" name="event_name" id="event-name" placeholder="Event Name" onChange={this.changeEventName} value={eventName} />
              </FormGroup>

              <FormGroup>
                <Label for="eventDescription">Description</Label>
                <Input type="textarea" name="desc" id="event-description" placeholder="Description" onChange={this.changeDesc} value={desc}/>
              </FormGroup>

              <FormGroup className="EventCardContent">
                <Label for="eventLocation">Location</Label>
                <Input type="location" name="location" id="event-location" placeholder="Location" onChange={this.changeLocation} value={locationAddress}/>
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


              <FormGroup className="EventCardContent">
                <Label for="eventDate">Date/Time</Label>
                <Input type="datetime-local" name="date" id="event-date" onChange={this.changeDateTime} value={dateTimeLocal} />
              </FormGroup>

              <FormGroup className="EventCardContent">
                <Label for="eventFile">Attach files:</Label>
                <CustomInput type="file" id="event-file" name="file" onChange={this.handleFileUploadChange} />
                { fileToUpload ?
                  <CardSubtitle>Selected file: {fileToUpload.name}</CardSubtitle>
                  :
                  null
                }
              </FormGroup>

              <FormGroup className="EventCardContent">
                <Label for="eventPhotos">Event Photos</Label>
                <CustomInput type="file" id="event-photos" name="image" onChange={this.handlePhotoUploadChange} />
                { photoToUpload ?
                  <CardSubtitle>Selected photo: {photoToUpload.name}</CardSubtitle>
                  :
                  null
                }
              </FormGroup>
              </>
            :
              <>
                <CardSubtitle>Date/Time: {dateTime}</CardSubtitle>
                { locationAddress ? <CardSubtitle>At: {locationAddress}</CardSubtitle> : null }
                { desc ? <CardText className='my-3'>Description: {desc}</CardText> : null }
                <Container fluid className='text-center mt-3'>
                    <Row>
                      <Col>
                        <CardSubtitle>Files Uploaded</CardSubtitle>
                        <ul className='text-left'>
                          { files.map(f =>
                            <li key={f.url}><a href={f.s3_url}>{f.title}</a></li>
                          )}
                        </ul>
                      </Col>

                      <Col>
                        <CardSubtitle>Photos Uploaded</CardSubtitle>
                        <Container fluid>
                          <Row className='d-flex flex-wrap'>
                            { photos.map(p =>
                              <Col xs='6' className='px-1 py-1'>
                                <a href={p.s3_url}><img src={p.s3_url} className='photo-thumbnail' /></a>
                              </Col>
                            )}
                          </Row>
                        </Container>
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
