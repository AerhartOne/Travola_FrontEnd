import React from 'react'
import load from '../images/loading-indicator.gif'

const Loader = (props) => {
    return(
        <div>
            <img className="rounded-circle" id="load"src={load} alt="loading"></img>
        </div>
    )
}


export default Loader