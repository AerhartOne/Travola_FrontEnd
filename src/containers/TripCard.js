import React, { Component } from 'react';
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
        Form,
        Input
} from 'reactstrap';
import axios from 'axios'
import '../css/TripCard.css'
import defaults from '../images/default-image.png'

class EventCard extends Component {
    constructor(props){
        super(props)

        this.state = {
            trip: this.props.trip
        }
    }

    handleDelete = e => {
        e.preventDefault()
        let formData = new FormData
        formData.set('trip_id', this.state.trip.id)
        axios.post("http://localhost:5000/api/v1/trips/delete",formData,{
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('jwt_token')
            }
        }).then(result => {
            this.props.parentPage.retrieveTripData()
        })
    }

    render() {
        const { trip } = this.state
        return (
            <a href={"/user/"+trip.parent_user.username+"/dashboard/"+trip.trip_name} className="px-0 py-0 h-100 trip-card-button">
            <Card className="shadow trip-card">
                <Form onSubmit={this.handleDelete}>
                    <Button type="submit" color='danger' className='close-button px-3'>X</Button>
                </Form>
                { trip.trip_img_url === "" ?
                    <CardImg top src={defaults} alt="Card image cap" className="trip-card-img trip-card-front-element" />
                    :
                    <CardImg top src={trip.s3_img_url} alt="Card image cap" className="trip-card-img trip-card-front-element" />
                }
                <CardBody className="card-front-element trip-card-body" >
                    <CardTitle className="trip-card-title">{trip.trip_name}</CardTitle>
                    <CardSubtitle className="trip-card-subtitle">{trip.trip_desc}</CardSubtitle>
                </CardBody>
            </Card>
            </a>
        );
    }
}

export default EventCard;