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
                        
                        <Col xs="12">
                            <NavBar/>
                        </Col>
                        <Col xs="12">
                            <EventAdderButton trip_name={this.props.match.params.trip_name}/>
                        </Col>
                        <EventCard/>
                    </Row>


                </Container>
            
            </div>
        
        );
    }
}