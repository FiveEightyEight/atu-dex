import React from 'react'
import './PokeIndex.css'

const PokeIndex = (props) => {
    const {name, sprite, number} = props.pokeInfo;
    const altText = `${name} sprite`
    return (
        <div className='col-12 nes-container is-rounded row point' onClick={props.handleIndexClick} id={name.toLowerCase()}>
            <img className='col-sm-12 col-md-1' alt={altText} src={sprite} id={name.toLowerCase()} />
            <h3 className='col-sm-12 col-md-6' id={name.toLowerCase()} >{name}</h3>
            <h3 className='ml-auto col-sm-12 col-md-3' id={name.toLowerCase()}># {number}</h3>
        </div>
    )
};

export default PokeIndex;