import React from 'react'     
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

export default class NewTripModal extends React.Component{
    constructor(props){
        super(props)

        this.state={
            name:"",
            desc:"",
            display_img: undefined
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
        this.setState({
            display_img:e.target.files[0]
        })
    }

    handleSubmit = (e) => {
        let formData = new FormData()
        formData.append('user_id',localStorage.getItem('id'))
        formData.append('trip_name',this.state.name)
        formData.append('trip_desc',this.state.desc)
        formData.append('trip_img', this.state.display_img)
        console.log(formData.entries)
        axios({
            method:"POST",
            url:"http://localhost:5000/api/v1/trips/new",
            data:formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
    }

    // Page Render
    render(){
        const { name, display_img } = this.state
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
                                    <Input onChange={this.handleTripNameChange}/>
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>Description</InputGroupText>
                                    </InputGroupAddon>
                                    <Input onChange={this.handleTripDescChange}/>
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