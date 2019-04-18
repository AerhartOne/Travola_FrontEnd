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
            events:[],
            trip_id:""
        }
    }

    componentDidMount(){
        axios.get("http://localhost:5000/api/v1/trips/"+this.props.trip_id+"/events")
        .then((result)=>{
            this.setState({
                events:result.data.data
            })
            console.log(this.state)
        })
    }

    render() {
        const { events } = this.state
        return (
            events.map(e =>
            <Col xs="12" md="4" key={e.id} className="py-3 px-3" >
                <Card className="h-100">
                    <CardImg top width="100%" src="https://placeimg.com/640/480/any" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{e.location}</CardTitle>
                        <CardSubtitle>{e.date_time}</CardSubtitle>
                        <CardText>{e.desc}</CardText>
                    </CardBody>
                    <CardFooter>
                        <EventCardContent />
                    </CardFooter>
                </Card>
            </Col>
            )
        );
    }
}

export default EventCard;