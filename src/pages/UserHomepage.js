import React from 'react'
import NavBar from '../containers/Navbar'
import { 
        Container ,
        Row,
        Col,
        Card,
        CardImg,
        Button,
        CardBody,
        CardText
    } from 'reactstrap'
import '../css/UserHomepage.css'
import button from '../images/add_button.png'
import defaults from '../images/default-image.png'

export default class UserHomepage extends React.Component{
    render(){
        return(
            <>
            <NavBar/>
            <Container id="container">
                <Row>
                    <Col xs="12" lg="12"><h1>Add/View Trip</h1></Col>
                    <Col xs="12" lg="4" className="mt-5">
                        <Card className="shadow">
                            <CardBody>
                                <Button href="/username/dashboard">
                                    <CardImg top width="100%" src={defaults} alt="Card image cap" />
                                    <CardText>Trip's name</CardText>
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" lg="4" className="mt-5">
                        <Card className="shadow">
                            <CardBody>
                                <Button id="add-button" href="/username/dashboard/new">
                                    <CardImg top width="100%" src={button} alt="Card image cap" />
                                    <CardText>Add new trip</CardText>
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}