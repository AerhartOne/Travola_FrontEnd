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
            trip_id: undefined
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/api/v1/users/"+localStorage.getItem('id')+"/trips")
        .then((result)=>{
            
            this.setState({
                trip_id:result.data.data.find(f => f.trip_name === this.props.match.params.trip_name),
                
            })
        })
    }

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
                        {
                            this.state.trip_id ?
                            <EventCard trip_id={this.state.trip_id.id}/> :
                            null
                        }
                    </Row>


                </Container>
            
            </div>
        
        );
    }
}