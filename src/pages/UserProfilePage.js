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

export default class UserProfilePage extends React.Component{
    render(){
        return(
            <>
            <NavBar/>
            <Container id="detail-container">
                <Row>
                    <Col xs="12" lg="4" >
                        <div id="image-col">
                            <a href="#">
                            <img src={profile} alt="profile" width="250px" height="250px" className="rounded-circle"/>
                            <p className="text">Change Profile Picture</p>
                            </a>
                        </div>
                    </Col>
                    <Col xs="12" lg="8">
                        <h1>User's Profile</h1>
                        <h3>@Username</h3>
                        <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</h5>
                    </Col>
                </Row>
            </Container>
            <hr/>
            <Container>
                <Row>
                    <Col xs="12" lg="12"><h1>Trip's History</h1></Col>
                    <Col xs="12" lg="4" className="mt-5">
                    <Card className="shadow">
                        <CardImg top width="100%" src={profile} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                        </CardBody>
                    </Card>
                    </Col>
                    <Col xs="12" lg="4" className="mt-5">
                    <Card className="shadow">
                        <CardImg top width="100%" src={profile} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                        </CardBody>
                    </Card>
                    </Col>
                    <Col xs="12" lg="4" className="mt-5">
                    <Card className="shadow">
                        <CardImg top width="100%" src={profile} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                        </CardBody>
                    </Card>
                    </Col>
                    <Col xs="12" lg="4" className="mt-5">
                    <Card className="shadow">
                        <CardImg top width="100%" src={profile} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                        </CardBody>
                    </Card>
                    </Col><Col xs="12" lg="4" className="mt-5">
                    <Card className="shadow">
                        <CardImg top width="100%" src={profile} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                        </CardBody>
                    </Card>
                    </Col><Col xs="12" lg="4" className="mt-5">
                    <Card className="shadow">
                        <CardImg top width="100%" src={profile} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                        </CardBody>
                    </Card>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}