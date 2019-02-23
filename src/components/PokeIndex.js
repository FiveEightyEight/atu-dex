import React from 'react'
import './PokeIndex.css'
import loadImg from '../assets/pika_load.gif'

const PokeIndex = (props) => {
    try {
        const { name, sprite, number } = props.pokeInfo;
        const altText = `${name} sprite`
    
        return (
            <div className='col-12 nes-container is-rounded row point mouseOver' onClick={props.handleIndexClick} id={name.toLowerCase()}>
                <img className='col-1' alt={altText} src={sprite} id={name.toLowerCase()} />
                <h3 className='col-3' id={name.toLowerCase()} >{name}</h3>
                <h3 className='ml-auto col-3' id={name.toLowerCase()}># {number}</h3>
            </div>
        )

    }
    catch  {
        return (
            <div className='col-12 nes-container is-rounded row point mouseOver'>
                <img className='col-1' alt='image loading' src={loadImg} style={{'height': '40px' }} />
                <h3 className='col-3' >Loading...</h3>
                <h3 className='ml-auto col-3' ># ... </h3>
            </div>
        )

    } 
   

};

export default PokeIndex;