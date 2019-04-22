import React, { Component } from 'react';
import EventCardContent from '../containers/EventCardContent.js'
import { 
        Card, 
        CardImg, 
        CardText, 
        CardBody,
        CardFooter,
        CardTitle, 
        CardSubtitle, 
        Button,
        Col,
        Form
} from 'reactstrap';
import axios from 'axios'
import '../css/EventCard.css'

class EventCard extends Component {
    constructor(props){
        super(props)

        this.state = {
            tripEvent:this.props.tripEvent
        }
    }

    handleDelete = e => {
        e.preventDefault()
        let formData = new FormData()
        formData.set('trip_event_id', this.state.tripEvent.id)
        axios.post("http://localhost:5000/api/v1/trip_events/delete",formData,{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('jwt_token')
            }
        }).then(result => {
            this.props.parentPage.getAllTripData()
        })
    }

    render() {
        const { tripEvent } = this.state
        return (
            <Col xs="12" md="4" key={tripEvent.id} className="py-3 px-3" >
                <Card className="h-100">
                    <Form onSubmit={this.handleDelete}>
                        <Button type="submit" color='danger' className='close-button px-3'>X</Button>
                    </Form>
                    <CardImg top width="100%" src="https://placeimg.com/640/480/any" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{tripEvent.event_name}</CardTitle>
                        <CardSubtitle>{tripEvent.date_time}</CardSubtitle>
                        { tripEvent.location !== '' ?
                            <CardSubtitle>At {tripEvent.location}</CardSubtitle>
                        :
                            null
                        }
                        { tripEvent.desc !== '' ?
                            <CardText>{tripEvent.desc}</CardText>
                        :
                            null
                        }
                    </CardBody>
                    <CardFooter>
                        <EventCardContent />
                    </CardFooter>
                </Card>
            </Col>
        );
    }
}

export default EventCard;