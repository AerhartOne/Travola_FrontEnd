import React, { Component } from 'react';
import EventCardContent from '../containers/EventCardContent.js'
import { 
        Card, 
        CardImg, 
        CardText, 
        CardBody,
        CardTitle, 
        CardSubtitle, 
        Button,
        Col
} from 'reactstrap';
import axios from 'axios'
// import console = require('console');


class EventCard extends Component {
    constructor(props){
        super(props)

        this.state = {
            events:[]
        }
    }

    componentDidMount(){
        Promise.all([
            axios.get("http://localhost:5000/api/v1/users/"+localStorage.getItem('id')+"/trips"),
            axios.get("http://localhost:5000/api/v1/trip_events/")
        ])
        .then((results) =>{
            this.setState({
                events:results[1].data.data.filter(f => f.parent_trip ===
                    results[0].data.data[0].parent_user)
            })
        })
    }

    render() {
        const { events } = this.state
        return (
                events.map(e =>
                <Col sm="4">
                <Card>
                <CardImg top width="100%" src="https://placeimg.com/640/480/any" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{e.location}</CardTitle>
                        <CardSubtitle>{e.date_time}</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button color="info">Show more</Button>
                    </CardBody>
                </Card>
                </Col>
                )
        );
    }
}

export default EventCard;