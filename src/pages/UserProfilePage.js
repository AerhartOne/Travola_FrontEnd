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
        Button,
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
            username:"",
            first_name:"",
            last_name:""
        }
    }

    componentDidMount(){
        axios.get("http://localhost:5000/api/v1/users/"+localStorage.getItem('id'))
            .then(result=>{
                this.setState({
                    username:result.data.data.username,
                    first_name:result.data.data.first_name,
                    last_name:result.data.data.last_name
                })
            })
    }
    render(){
        const { username , first_name , last_name } = this.state
        return(
            <div className="body-background">
            <NavBar/>
            <Container id="detail-container">
                <Row>
                    <Col xs="12" lg="4" >
                        <div id="image-col">
                            <img src={profile} alt="profile" width="250px" height="250px" className="rounded-circle"/>
                            <p className="text d-flex justify-content-center">Change Profile Picture</p>
                        </div>
                    </Col>
                    <Col xs="12" lg="8">
                        <h1>{first_name+" "+last_name}'s Profile</h1>
                        <h3>@{username}</h3>
                        <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</h5>
                    </Col>
                </Row>
            </Container>
            <hr/>
            <Container>
                <Row>
                    <Col xs="12" lg="12"><h1>Trip's History</h1></Col>
                    <Col xs="12" lg="4" className="mt-5 card-container">
                    <Card className="shadow thecard">
                        <CardImg src={defaults} alt="Card image cap" className="front"/>
                        <CardText className="front d-flex justify-content-center cardtext">Trip name</CardText>
                        
                        <div className="back">
                            <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <button className="see-more-button">See More</button>
                            </CardBody>
                        </div>
                    </Card>
                    </Col>
                    <Col xs="12" lg="4" className="mt-5 card-container">
                    <Card className="shadow thecard">
                        <CardImg src={defaults} alt="Card image cap" className="front"/>
                        <CardText className="front d-flex justify-content-center cardtext">Trip name</CardText>
                        <div className="back">
                            <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <button className="see-more-button">See More</button>
                            </CardBody>
                        </div>
                    </Card>
                    </Col>
                    <Col xs="12" lg="4" className="mt-5 card-container">
                    <Card className="shadow thecard">
                        <CardImg src={defaults} alt="Card image cap" className="front"/>
                        <CardText className="front d-flex justify-content-center cardtext">Trip name</CardText>
                        <div className="back">
                            <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <button className="see-more-button">See More</button>
                            </CardBody>
                        </div>
                    </Card>
                    </Col>
                    <Col xs="12" lg="4" className="mt-5 card-container">
                    <Card className="shadow thecard">
                        <CardImg src={defaults} alt="Card image cap" className="front"/>
                        <CardText className="front d-flex justify-content-center cardtext">Trip name</CardText>
                        <div className="back">
                            <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <button className="see-more-button">See More</button>
                            </CardBody>
                        </div>
                    </Card>
                    </Col>
                    <Col xs="12" lg="4" className="mt-5 card-container">
                    <Card className="shadow thecard">
                        <CardImg src={defaults} alt="Card image cap" className="front"/>
                        <CardText className="front d-flex justify-content-center cardtext">Trip name</CardText>
                        <div className="back">
                            <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <button className="see-more-button">See More</button>
                            </CardBody>
                        </div>
                    </Card>
                    </Col>
                    <Col xs="12" lg="4" className="mt-5 card-container">
                    <Card className="shadow thecard">
                        <CardImg src={defaults} alt="Card image cap" className="front"/>
                        <CardText className="front d-flex justify-content-center cardtext">Trip name</CardText>
                        <div className="back">
                            <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <button className="see-more-button">See More</button>
                            </CardBody>
                        </div>
                    </Card>
                    </Col>
                </Row>
            </Container>
            </div>
        )
    }
}