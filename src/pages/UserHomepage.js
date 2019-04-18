import React from 'react'
import NavBar from '../containers/Navbar'
import { 
        Container ,
        Row,
        Col,
        Card,
        CardBody,
        CardFooter,
        CardTitle,
        CardSubtitle,
        CardText,
        CardImg,
        Button,
    } from 'reactstrap'
import '../css/UserHomepage.css'
import button from '../images/add_button.png'
import defaults from '../images/default-image.png'
import NewTripModal from '../containers/NewTripModal'
import axios from 'axios'
import Loader from '../components/Loader'

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
    toggle = (e) => {
        this.setState({
            modal:!this.state.modal
        })
    }


    render(){
        const {modal,user,trips,isLoading} = this.state
        return(
            <div className="body-background">
            <Container fluid id="container" className="d-flex flex-column align-items-center justify-content-center w-100 px-0">
                <Row>
                    <NavBar/>
                </Row>
                <Row id="header-section" className="w-100 d-flex flex-column justify-content-center align-items-center py-3">
                    <h1 className="display-1">{user.username}'s Trips</h1>
                    <Button className="w-50 my-3" id="add_view_trips" onClick={this.toggle}>Add a Trip</Button>
                </Row>
                <Row id="trip-list-section" className="w-75">
                    { isLoading ? 
                        <Loader/>
                    :
                        null
                    }
                    { trips.length > 0 ?
                        <>
                        { trips.map(trip =>
                            <Col xs="12" lg="4" className="my-3" key={trip.id}>
                                <a href={"/user/"+user.username+"/dashboard/"+trip.trip_name} className="px-0 py-0 h-100 card-button">
                                <Card className="shadow h-100 trip-card">
                                    { trip.trip_img_url === "" ?
                                        <CardImg top width="100%" src={defaults} alt="Card image cap" />
                                        :
                                        <CardImg top width="100%" src={trip.s3_img_url} alt="Card image cap" />
                                    }
                                    <CardBody classname="h-100">
                                        <CardTitle>{trip.trip_name}</CardTitle>
                                        <CardSubtitle>{trip.trip_desc}</CardSubtitle>
                                    </CardBody>
                                </Card>
                                </a>
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
                    {/* <Col xs="12" lg="4" className="mt-5">
                        <Card className="shadow">
                            <CardBody>
                                <Button id="add-button" onClick={this.toggle}>
                                    <CardImg top width="100%" src={button} alt="Card image cap" />
                                    <CardText>Add new trip</CardText>
                                </Button>
                            </CardBody>
                        </Card>
                    </Col> */}
                </Row>
            </Container>
            <NewTripModal modal={modal} toggle={this.toggle}/>
            </div>
        )
    }
}