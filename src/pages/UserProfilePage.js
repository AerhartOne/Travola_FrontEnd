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
            <Container fluid className="d-flex flex-column py-3 px-3 align-items-center" id="detail-container">
                <Row className="row d-flex align-items-center w-100">
                    <Col className="w-100" xs="12" lg="4" >
                        <div id="image-col">
                            <img src={profile} alt="profile" width="250px" height="250px" className="rounded-circle"/>
                            <p className="text d-flex justify-content-center">Change Profile Picture</p>
                        </div>
                    </Col>
                    <Col className="w-100" xs="12" lg="8">
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
                <Row className="d-flex flex-column">
                    <Col><h1>Trip History</h1></Col>
                    <Col className="card-container">
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