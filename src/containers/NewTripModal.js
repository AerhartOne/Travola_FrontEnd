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
import axios from 'axios'

export default class NewTripModal extends React.Component{
    constructor(props){
        super(props)

        this.state={
            name:"",
            desc:"",
            file: null
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
            file:e.target.files[0]
        })
    }

    handleSubmit = (e) => {
        let formData = new FormData()
        formData.append('user_id',localStorage.getItem('id'))
        formData.append('trip_name',this.state.name)
        formData.append('trip_desc',this.state.desc)
        formData.append('trip_img',this.state.file)
        console.log(formData.get('user_id'))
        console.log(formData.get('trip_name'))
        console.log(formData.get('trip_desc'))
        console.log(formData.get('trip_img'))
        axios({
            method:"POST",
            url:"http://localhost:5000/api/v1/trips/new",
            data:formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
    }

    // Page Render
    render(){
        const { name, file } = this.state
        const {toggle , modal} = this.props
        return(
            <>
            <Modal isOpen={modal}>
                <ModalHeader toggle={toggle}>New Trip</ModalHeader>
                <Form onSubmit={this.handleSubmit}>
                    <ModalBody>
                            <FormGroup>
                                <Label>Trip Name</Label>
                                <Input onChange={this.handleTripNameChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Trip Description</Label>
                                <Input onChange={this.handleTripDescChange}/>
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