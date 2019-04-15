import React from 'react'     
import { 
        Modal,
        ModalHeader,
        ModalBody,
        Label,
        Input,
        Form,
        FormGroup,
        ModalFooter,
        Button
    } from 'reactstrap'
import countryList from 'react-select-country-list'
import Select from 'react-select'

export default class NewTripModal extends React.Component{
    constructor(props){
        super(props)

        this.options = countryList().getData()

        this.state={
            options:this.options,
            value:null,
            name:""
        }
    }

    handleCountryChange = (value) => {
        this.setState({value})
    }

    handleTrip = (e) => {
        this.setState({
            name:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render(){
        const {toggle , modal} = this.props
        return(
            <>
            <Modal isOpen={modal}>
            <ModalHeader toggle={toggle}>New Trip</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>Trip Name</Label>
                        <Input onChange={this.handleTrip}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Country</Label>
                        <Select
                            options={this.state.options}
                            value={this.state.value}
                            onChange = {this.handleCountryChange}
                        />
                    </FormGroup>
                
            
            <ModalFooter><Button type="submit" color="primary" block>Submit</Button></ModalFooter>
            </Form>
            </ModalBody>
            </Modal>
            </>
        )
    }
}