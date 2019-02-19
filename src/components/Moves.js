import React from 'react'
import './Moves.css'

const Moves = (props) => {

    let allClasses = `nes-btn moves`;

    return (
        <>
            <button className={allClasses} onClick={props.handleMoveClick} id={props.move}>{props.move}</button>
        </>
    )
}

export default Moves; 
