import React from 'react'
import NavBar from '../containers/Navbar'
import EventAdderButton from '../containers/EventAdderButton'
import EventCard from '../containers/EventCard'
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios'
import Loader from '../components/Loader'

export default class TripDashboard extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            trip: undefined,
            tripEvents: [],
            isLoading: true
        }
    }

    componentDidMount() {
        this.getAllTripData()
    }

    getAllTripData() {
        this.setState({isLoading: true})
        axios.get("http://localhost:5000/api/v1/users/"+localStorage.getItem('id')+"/trips", {
            headers: { 'Authorization': "Bearer " + localStorage.getItem("jwt_token") }
        })
        .then((result)=>{
            this.setState({
                trip:result.data.data.find(f => f.trip_name === this.props.match.params.trip_name),
            })

            axios.get("http://localhost:5000/api/v1/trips/" + this.state.trip.id + "/events")
            .then(result => {
                this.setState({
                    tripEvents: result.data.data
                })
                this.setState({isLoading: false})
            })
        });
    }

    render(){
        const { trip, tripEvents, isLoading } = this.state
        return(
            <Container fluid className="dashboard-container d-flex flex-column justify-content-center align-items-center px-0 py-0">
                <NavBar/>
                <Row xs="12" className="mt-3 my-0 w-75">
                    <Col className="w-100">
                            <EventAdderButton trip_name={this.props.match.params.trip_name} parentPage={this} parentTrip={this.state.trip}/>
                    </Col>
                </Row>
                { isLoading == false ?
                    tripEvents.length > 0 ?
                        <>
                            <Row className="w-75">
                                {
                                    this.state.tripEvents.map(tripEvent => 
                                        <EventCard tripEvent={tripEvent} parentPage={this}/>
                                    )
                                }
                            </Row>
                        </>
                    :
                        <Row className="w-75 py-5">
                            <h2 className="display-3 w-100 text-center">This trip doesn't have any events yet. Add some!</h2>
                        </Row>
                :
                <>
                    <Loader />
                </>
                }
            </Container>
        );
    }
}