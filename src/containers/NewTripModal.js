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
            
        }
    }



    handleTrip = (e) => {
        this.setState({
            name:e.target.value
        })
    }

    handleFile = (e) => {
        this.setState({
            filename:e.target.value
        })
    }

    handleSubmit = (e) => {
        console.log(this.state)
        let formData = new FormData()
        formData.set('trip_name',this.state.name)
        formData.set('user_id',localStorage.getItem('id'))
        axios({
            method:"POST",
            url:"http://localhost:5000/api/v1/trips/new",
            data:formData,
            config: { headers: {'Content-Type': 'multipart/form-data' }}
        })
    }

    render(){
        const { name, filename } = this.state
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
                    {/* <FormGroup>
                        <Label>Upload an image</Label>
                        <Input onChange={this.handleFile} type="file"/>
                    </FormGroup> */}
            <ModalFooter>
                {/* {name && filename ?
                <Button type="submit" color="primary" block>Submit</Button>:
                <Button block disabled color="primary">Submit</Button>} */}
                <Button type="submit" color="primary" block onClick={toggle}>Submit</Button>
            </ModalFooter>
            </Form>
            </ModalBody>
            </Modal>
            </>
        )
    }
}