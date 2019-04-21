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
        Col
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

    render() {
        const { tripEvent } = this.state
        return (
            <Col xs="12" md="4" key={tripEvent.id} className="py-3 px-3" >
                <Card className="h-100">
                    <CardImg top width="100%" src="https://placeimg.com/640/480/any" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{tripEvent.location}</CardTitle>
                        <CardSubtitle>{tripEvent.date_time}</CardSubtitle>
                        <CardText>{tripEvent.desc}</CardText>
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