import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import HomepageNav from '../containers/HomepageNav'

export default class Homepage extends React.Component{
    render(){
        return(
            <div>
                <HomepageNav/>
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3">Fluid jumbotron</h1>
                        <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        <p className="lead">
                            <Button color="primary">Learn More</Button>
                        </p>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}