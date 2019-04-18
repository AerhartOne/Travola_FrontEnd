import React from 'react'
import NavBar from '../containers/Navbar'
import { 
        Container ,
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
            <div className="body-background">
            
            <NavBar/>

            <Container className="d-flex flex-column py-5 px-3 align-items-center w-75" id="detail-container">
                <Row className="d-flex justify-content-center align-items-center w-100">
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
                    <h1>Trip History</h1>
                </Row>
                <Row className="w-100 py-3">
                {
                    trips.map(trip => 
                        <Col xs="12" lg="4" className="card-container py-3">
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
                                <CardText className="front d-flex justify-content-center align-items-center card-front-text">{trip.trip_name}</CardText>
                                
                                <div className="back">
                                    <CardBody>
                                    <CardTitle>{trip.trip_name}</CardTitle>
                                    {/* <CardSubtitle>{trip.trip_desc}</CardSubtitle> */}
                                    <CardText>{trip.trip_desc}</CardText>
                                    <button className="see-more-button">See More</button>
                                    </CardBody>
                                </div>
                            </Card>
                        </Col>
                    )
                }
                </Row>
            </Container>
            </div>
        )
    }
}