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
            username:"",
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
                username:results[0].data.data.username,
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
        const {modal,trips,username,isLoading} = this.state
        return(
            <div className="body-background">
            <NavBar/>
            <Container id="container">
                <Row>
                    <Col xs="12" lg="12"><button className="h1" id="add_view_trips" onClick={this.toggle}>Add/View Trip</button></Col>
                    {
                        isLoading ? <Loader/>:null
                    }
                    {
                        trips.map(trip =>
                            <Col xs="12" lg="4" className="mt-5" key={trip.id}>
                                <Card className="shadow">
                                    <CardBody>
                                        <Button href={"/user/"+username+"/dashboard/"+trip.trip_name}>
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