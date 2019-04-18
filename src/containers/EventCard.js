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



class EventCard extends Component {
    constructor(props){
        super(props)

        this.state = {
            events:[],
            trip_id:""
        }
    }

    componentDidMount(){
        Promise.all([
            axios.get("http://localhost:5000/api/v1/trip_events/"),
            axios.get("http://localhost:5000/api/v1/trips/"+this.props.trip_id+"/show")
        ])
        .then((results)=>{
            this.setState({
                events:results[0].data.data.filter(f => f.parent_trip === results[1].data.data.id)
            })
            console.log(this.state)
        })
    }

    render() {
        const { events } = this.state
        return (
                events.map(e =>
                <Col sm="4" key={e.id}>
                <Card>
                <CardImg top width="100%" src="https://placeimg.com/640/480/any" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{e.location}</CardTitle>
                        <CardSubtitle>{e.date_time}</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <EventCardContent />
                    </CardBody>
                </Card>
                </Col>
                )
        );
    }
}

export default EventCard;