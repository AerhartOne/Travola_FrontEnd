import React from 'react'
import NavBar from '../containers/Navbar'
import { 
        Container ,
        Row,
        Col,
        Button,
    } from 'reactstrap'
import '../css/UserHomepage.css'
import NewTripModal from '../containers/NewTripModal'
import axios from 'axios'
import Loader from '../components/Loader'
import TripCard from '../containers/TripCard'



export default class UserHomepage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            modal:false,
            user:"",
            trips:[],
            isLoading:true
        }
    }

    componentDidMount(){
        this.retrieveTripData()
    }

    toggle = (e) => {
        this.setState({
            modal:!this.state.modal
        })
    }

    retrieveTripData(){
        this.setState({isLoading: true})
        Promise.all([
            axios.get("http://localhost:5000/api/v1/users/"+localStorage.getItem('id')),
            axios.get("http://localhost:5000/api/v1/users/"+localStorage.getItem('id')+"/trips")
        ])
        .then((results) =>{
            this.setState({
                user:results[0].data.data,
                trips:results[1].data.data,
                isLoading:false
            })
        })
    }

    render(){
        const {modal,user,trips,isLoading} = this.state
        return(
            <>
            <Container id="user-homepage-main-container" fluid className="d-flex flex-column align-items-center py-0 px-0 w-100">
                <NavBar/>
                <Row id="header-section" className="w-100 d-flex flex-column justify-content-center align-items-center py-3">
                    <h1 className="display-1">{user.username}'s Trips</h1>
                    <Button className="w-50 my-3" id="add_view_trips" onClick={this.toggle}>Add a Trip</Button>
                </Row>
                <Row id="trip-list-section" className="w-75">
                    { isLoading ? 
                        <Loader/>
                    :
                        trips.length > 0 ?
                            <>
                            { trips.map(trip =>
                                <Col xs="12" lg="4" className="my-3" key={trip.id}>
                                    <TripCard parentPage={this} trip={trip} user={user} />
                                </Col>
                                )}
                            </>
                        :
                            <>
                                <Col className="w-100 d-flex flex-column align-items-center justify-content-center my-5 lead text-center">
                                    <p>{user.username} doesn't have any trips yet.</p>
                                    <p>Add some!</p>
                                </Col>
                            </>
                    }
                </Row>
            </Container>
            <NewTripModal modal={modal} toggle={this.toggle} parentPage={this}/>
            </>
        )
    }
}