import React from 'react'
import NavBar from '../containers/Navbar'
import EventAdderButton from '../containers/EventAdderButton'
import EventCard from '../containers/EventCard'
import { Container, Row, Col } from 'reactstrap';


export default class TripDashboard extends React.Component{
    render(){
        return(
            
            <div>
                
                <Container fluid className="dashboard-container">
                    
                    <Row>
                        
                        <Col>
                            <NavBar/>
                        </Col>

                    </Row>

                    <Row>

                        <Col>
                            <EventAdderButton />
                        </Col>
                        
                    </Row>
                    
                    <Row className="card-row">
                        
                        <Col sm="4">
                            <EventCard />
                        </Col>

                        <Col sm="4">
                            <EventCard />
                        </Col>

                        <Col sm="4">
                            <EventCard />
                        </Col>

                    </Row>

                    <Row className="card-row">
                        
                        <Col sm="4">
                            <EventCard />
                        </Col>

                        <Col sm="4">
                            <EventCard />
                        </Col>

                        <Col sm="4">
                            <EventCard />
                        </Col>

                    </Row>

                </Container>
            
            </div>
        
        );
    }
}