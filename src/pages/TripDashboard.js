import React from 'react'
import NavBar from '../containers/Navbar'
import EventAdderButton from '../containers/EventAdderButton'
import EventCard from '../containers/EventCard'
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios'

export default class TripDashboard extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            trip: undefined
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/api/v1/users/"+localStorage.getItem('id')+"/trips")
        .then((result)=>{
            
            this.setState({
                trip:result.data.data.find(f => f.trip_name === this.props.match.params.trip_name),
            })
        })
    }

    render(){
        return(
            <Container fluid className="dashboard-container d-flex flex-column justify-content-center align-items-center px-0 py-0">
                <NavBar/>

                <Row xs="12" className="mt-3 my-0 w-75">
                    <Col className="w-100">
                            <EventAdderButton trip_name={this.props.match.params.trip_name}/>
                    </Col>
                </Row>
                <Row className="w-75">
                    {
                        this.state.trip ?
                        <EventCard trip_id={this.state.trip.id}/> :
                        null
                    }
                </Row>
            </Container>
        );
    }
}