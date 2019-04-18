import React from 'react'
import Link from 'react-router-dom'
import NavBar from '../containers/Navbar'
import { 
        Button,
        Container,
        Col,
        Row,
        Card,
        CardBody,
        CardTitle,
        CardSubtitle,
        CardText,
        CardImg
        } from 'reactstrap'
import '../css/userProfilePage.css'
import profile from '../images/anonymous-user.png'
import defaults from '../images/default-image.png'
import axios from 'axios';

export default class UserProfilePage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            user:{},
            trips:[]
        }
    }

    componentDidMount(){
        Promise.all(
            [axios.get("http://localhost:5000/api/v1/users/"+localStorage.getItem('id')),
            axios.get("http://localhost:5000/api/v1/users/"+localStorage.getItem('id')+"/trips")]
        ).then(results=>{
            this.setState({
                user:results[0].data.data,
                trips:results[1].data.data
            })
            console.log(this.state)
        })
    }
    render(){
        const { user, trips } = this.state
        return(
            <>
            <Container fluid className="d-flex flex-column py-5 px-0 align-items-center w-100" id="detail-container">
            <NavBar/>
                <Row id="user-detail-section" className="d-flex py-5 justify-content-center align-items-center text-center w-100">
                    <Col className="d-flex justify-content-center" xs="12" lg="auto">
                        { user.avatar_url !== undefined && user.avatar_url !== null && user.avatar_url !== "" ? 
                            <img src={user.s3_avatar_url} alt="profile" width="200px" height="200px" className="rounded-circle"/>
                        :
                            <img src={profile} alt="profile" width="200px" height="200px" className="rounded-circle"/>
                        }
                    </Col>
                    <Col className="" xs="12" lg="auto">
                        <h1>{user.first_name+" "+user.last_name}'s Profile</h1>
                        <h3>@{user.username}</h3>
                        <h5>
                            {
                                user.bio_text !== undefined && user.bio_text !== null && user.bio_text != "" ?
                                <React.Fragment>
                                    {user.bio_text}
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    This user hasnt written anything about themselves.
                                </React.Fragment>
                            }
                        </h5>
                    </Col>
                </Row>
                <Row className="w-100 py-3 d-flex justify-content-center">
                    <h1 className="my-0">Trip History</h1>
                </Row>
                <Row id="trip-history-section" className="w-100">
                {
                    trips.map(trip => 
                        <Col xs="12" lg="4" className="card-container py-3 px-3">
                            <Card className="shadow thecard d-flex flex-column align-content-center">
                                { trip.trip_img_url !== undefined && trip.trip_img_url !== null && trip.trip_img_url !== "" ?
                                    <>
                                        <CardImg src={trip.s3_img_url} alt="Card image cap" className="front"/>
                                    </>
                                    :
                                    <>
                                        <CardImg src={defaults} alt="Card image cap" className="front"/>
                                    </>
                                }
                                <CardTitle className="d-flex justify-content-center align-items-center profile-trip-card-front-text profile-trip-card-title front">{trip.trip_name}</CardTitle>
                                
                                <div className="back">
                                    <CardBody>
                                        <CardTitle className="profile-trip-card-title">{trip.trip_name}</CardTitle>
                                        <CardText className="profile-trip-card-text">{trip.trip_desc}</CardText>
                                        <a href={"/user/"+user.username+"/dashboard/"+trip.trip_name} className="see-more-button w-100">Go to Trip</a>
                                    </CardBody>
                                </div>
                            </Card>
                        </Col>
                    )
                }
                </Row>
            </Container>
            </>
        )
    }
}