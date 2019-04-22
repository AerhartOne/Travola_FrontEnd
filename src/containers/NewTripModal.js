import React from 'react';
import { 
        Modal,
        ModalHeader,
        ModalBody,
        Label,
        Input,
        InputGroup,
        InputGroupAddon,
        InputGroupText,
        Form,
        FormGroup,
        ModalFooter,
        Button
    } from 'reactstrap'
import axios from 'axios'
// import console = require('console');

export default class NewTripModal extends React.Component{
    constructor(props){
        super(props)

        this.state={
            name:"",
            desc:"",
            displayImg: undefined,
            parentPage: props.parentPage,

        }
    }

    // Event Handlers
    handleTripNameChange = (e) => {
        this.setState({
            name:e.target.value
        })
    }

    handleTripDescChange = (e) => {
        this.setState({
            desc:e.target.value
        })
    }

    handleFileUploadChange = (e) => {
        if (e.target.files[0] !== undefined) {
            this.setState({
                displayImg:e.target.files[0]
            })
        } else {
            this.setState({
                displayImg:null
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('user_id',localStorage.getItem('id'))
        formData.append('trip_name',this.state.name)
        formData.append('trip_desc',this.state.desc)
        formData.append('trip_img', this.state.displayImg)
        axios({
            method:"POST",
            url:"http://localhost:5000/api/v1/trips/new",
            data:formData,
            headers: {
                'Authorization' : 'Bearer ' + localStorage.getItem("jwt_token"),
                'Content-Type': 'multipart/form-data'
            }
        }).then(result => {
            this.state.parentPage.retrieveTripData()
        })
    }

    // Page Render
    render(){
        const { name, displayImg } = this.state
        const {toggle , modal} = this.props
        return(
            <>
            <Modal isOpen={modal}>
                <ModalHeader toggle={toggle}>New Trip</ModalHeader>
                <Form onSubmit={this.handleSubmit}>
                    <ModalBody>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>Name</InputGroupText>
                                    </InputGroupAddon>
                                    <Input onChange={this.handleTripNameChange} type="text" />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>Description</InputGroupText>
                                    </InputGroupAddon>
                                    <Input onChange={this.handleTripDescChange} type="textarea"/>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <Label>Upload a trip image</Label>
                                <Input onChange={this.handleFileUploadChange} type="file"/>
                            </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        {/* {name && filename ?
                        <Button type="submit" color="primary" block>Submit</Button>:
                        <Button block disabled color="primary">Submit</Button>} */}
                        <Button type="submit" color="primary" block onClick={toggle}>Submit</Button>
                    </ModalFooter>
                </Form>
            </Modal>
            </>
        )
    }
}