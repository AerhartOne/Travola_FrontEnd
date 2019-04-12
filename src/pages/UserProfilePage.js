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
                    <Col xs="4" id="image-col">
                        <img src={profile} alt="profile" width="250px" height="250px" className="rounded-circle"/>
                    </Col>
                    <Col xs="8">
                        <h1>User's Profile</h1>
                        <h3>@Username</h3>
                        <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</h5>
                    </Col>
                </Row>
            </Container>
            <hr/>
            <Container>
                <h1>Trip's History</h1>
                <Row className="mt-5">
                    <Col xs="4">
                    <Card>
                        <CardImg top width="100%" src={profile} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                        </CardBody>
                    </Card>
                    </Col>
                    <Col xs="4">
                    <Card>
                        <CardImg top width="100%" src={profile} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                        </CardBody>
                    </Card>
                    </Col>
                    <Col xs="4">
                    <Card>
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
                <Row className="mt-5">
                    <Col xs="4">
                    <Card>
                        <CardImg top width="100%" src={profile} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                        </CardBody>
                    </Card>
                    </Col>
                    <Col xs="4">
                    <Card>
                        <CardImg top width="100%" src={profile} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button>Button</Button>
                        </CardBody>
                    </Card>
                    </Col>
                    <Col xs="4">
                    <Card>
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