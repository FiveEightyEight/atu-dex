import React from 'react'
import './Moves.css'

const Moves = (props) => {

    let allClasses = `nes-btn moves`;
    const {uName, pp, power, type} = props.modal
    return (
        <>
            <button className={allClasses} onClick={props.handleMoveClick} id={props.move} data-toggle="modal" data-target="#exampleModalCenter">{props.move}</button>
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="col-12 pt-3">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className='text-center p-3'>
                                <h2 className='p-1'>{uName}</h2>
                                <h4>Type: {type}</h4>
                                <h4>Power: {power}</h4>
                                <h4>PP: {pp}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Moves; 
