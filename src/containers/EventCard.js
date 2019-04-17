import React, { Component } from 'react';
import { 
        Card, 
        CardImg, 
        CardText, 
        CardBody,
        CardTitle, 
        CardSubtitle, 
        Button 
} from 'reactstrap';


class EventCard extends Component {
    render() {
        return (
            <Card>
            <CardImg top width="100%" src="https://placeimg.com/640/480/any" alt="Card image cap" />
                <CardBody>
                    <CardTitle>New Event Name</CardTitle>
                    <CardSubtitle>Event Date</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button color="info">Show more</Button>
                </CardBody>
            </Card>
        );
    }
}

export default EventCard;