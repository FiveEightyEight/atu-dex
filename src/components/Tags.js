import React from 'react'
import './Tags.css'



const Tags = (props) => {

    let allClasses = `col-12 nes-btn bothTag cap ${props.type} disabled`;

    return (
        <button className={allClasses}>{props.name}</button>
    )
}

export default Tags;