import React, { Component } from 'react';



class Bar extends Component {
    render() {
        return (

            <div>

                <div className="rightbar-container">
                    <i class="fas fa-plus-circle"></i>
                </div>
                
                <div className="leftbar-container">
                    <i className="fas fa-user-plus"></i>
                </div>
                
            </div>
        );
    }
}

export default Bar;