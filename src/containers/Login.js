import React from 'react'
import { 
    Button , 
    Modal , 
    ModalHeader , 
    ModalBody , 
    ModalFooter , 
    Form,
    FormGroup,
    Label,
    Input,
} from 'reactstrap'

export default class LogIn extends React.Component{

    render(){
        const { loginModal,toggleLogin } = this.props
        return(
            <>
            <Modal isOpen={loginModal}>
                <ModalHeader toggle={toggleLogin}>Member Log In</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input type="email"/>
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input type="password"/>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" block>Log In</Button>
                </ModalFooter>
            </Modal>
            </>
        )
    }
}