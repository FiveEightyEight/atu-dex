import React from 'react'
import './Tags.css'



const Tags = (props) => {

    let allClasses = `nes-btn bothTag ${props.type} disabled`;

    return (
        <button className={allClasses}>{props.name}</button>
    )
}

export default Tags;