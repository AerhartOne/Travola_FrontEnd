import React, { Component } from 'react';
import { 
        Card, 
        CardImg, 
        CardText, 
        CardBody,
        CardTitle, 
        CardSubtitle, 
        Button 
} from 'reactstrap';


class SideBar extends Component {
    render() {
        return (

            <div>

                {/* this is right side of the bar */}
                <div className="rightbar-container">
                    <i class="fas fa-plus-circle"></i>
                </div>
                
                {/* this is left side of the bar */}
                <div className="leftbar-container">
                    <i className="fas fa-user-plus"></i>
                </div>
                
            </div>
        );
    }
}

export default SideBar;