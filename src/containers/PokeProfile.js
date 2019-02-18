import React from 'react'
import './PokeProfile.css'

const PokeProfile = (props) => {
    const { move, name, number, picture, sprites, stats, types, index } = props.pokemon;
    console.log(props.pokemon)
    return (
        <>
            <nav aria-label="col-12 breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item point" onClick={props.home}><span>Home</span></li>
                    <li className="breadcrumb-item active" aria-current="page">{name}</li>
                </ol>
            </nav>
        </>
    )
};

export default PokeProfile;