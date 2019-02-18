import React from 'react'
import './Moves.css'

const Moves = (props) => {

    let allClasses = `nes-btn moves`;

    return (
        <>
            <button className={allClasses}>{props.move1}</button><button className={allClasses}>{props.move2}</button><button className={allClasses}>{props.move3}</button>
        </>
    )
}

export default Moves; 
