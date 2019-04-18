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
            <Container fluid id="container" className="w-75 py-5">
                <Row>
                    <NavBar/>
                </Row>
                <Row className="d-flex flex-column justify-content-center align-items-center">
                    <h1 className="display-1">{user.username}'s Trips</h1>
                    <Button className="w-50 my-3" id="add_view_trips" onClick={this.toggle}>Add a Trip</Button>
                </Row>
                <Row>
                    {
                        isLoading ? <Loader/>:null
                    }
                    {
                        trips.map(trip =>
                            <Col xs="12" lg="4" className="my-3" key={trip.id}>
                                <Card className="shadow">
                                    <CardBody>
                                        <Button href={"/user/"+user.username+"/dashboard/"+trip.trip_name}>
                                        { trip.trip_img_url === "" ?
                                            <CardImg top width="100%" src={defaults} alt="Card image cap" />
                                            :
                                            <CardImg top width="100%" src={trip.s3_img_url} alt="Card image cap" />
                                        }
                                            <CardText>{trip.trip_name}</CardText>
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            )
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