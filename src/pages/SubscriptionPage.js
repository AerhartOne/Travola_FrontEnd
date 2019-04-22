import React from 'react'
import NavBar from '../containers/Navbar'
import { 
        Button,
        Container,
        Col,
        Row,
        Card,
        CardBody,
        CardTitle,
        CardText,
        CardImg,
        Form,
        Input,
        Table
        } from 'reactstrap'
import axios from 'axios';
import DropIn from 'braintree-web-drop-in-react'
import '../css/SubscriptionPage.css'
import Loader from '../components/Loader'
let dropin = require('braintree-web-drop-in')

export default class SubscriptionPage extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            user:{},
            subscriptions:{},
            paymentToken: '',
            paymentNonce: '',
            loadingPaymentForm: true
        }
    }

    componentDidMount(){
        this.getSubscriptionData()
        this.getPaymentToken()
    }
    
    getSubscriptionData() {
        Promise.all([
            axios.get("http://localhost:5000/api/v1/users/"+localStorage.getItem('id')),
            axios.get("http://localhost:5000/api/v1/users/"+localStorage.getItem('id')+"/subscriptions")
        ]).then(results=>{
            this.setState({
                user:results[0].data.data,
                subscriptions:results[1].data.data
            })
            console.log(this.state)
        })
    }

    getPaymentToken() {
        this.setState({loadingPaymentForm: true})
        axios.get("http://localhost:5000/api/v1/subscriptions/token")
        .then(result => {
            this.setState({
                paymentToken: result.data,
                loadingPaymentForm: false
            })
            console.log(this.state)
            this.createPaymentForm()
            return result
        })
    }

    createPaymentForm() {
        dropin.create({
            authorization: this.state.paymentToken,
            container: '#payment-form-container'
          })
    }

    handleSubmit(e) {

    }

    render(){
        const { user, subscriptions, paymentToken, paymentNonce, loadingPaymentForm } = this.state
        return(
            <>
            <script src="https://js.braintreegateway.com/web/dropin/1.17.2/js/dropin.min.js"></script>
            <Container fluid className="d-flex flex-column px-0 align-items-center w-100" id="main-container">
                <NavBar/>
                <Row className="w-100 py-3 d-flex flex-column align-items-center justify-content-center">
                    <h1 className="my-0 display-1">{user.username}'s Subscriptions</h1>
                    {
                        subscriptions.subscription_is_active ? 
                            <h2 className='display-4 py-5'>You have a premium subscription!</h2>
                        :
                            <>
                            <h2 className='display-4 py-5'>You don't have a premium subscription. Get one now!</h2>

                            { loadingPaymentForm ?
                                <Loader />
                            :
                                <Form className='d-flex flex-column align-items-center justify-content-center'>
                                    <div id='payment-form-container'></div>
                                    <Button color='success' onClick={this.handleSubmit} className='w-100'>Subscribe!</Button>
                                </Form>
                            }
                            </>
                    }
                </Row>
            </Container>

            </>
        )
    }
}