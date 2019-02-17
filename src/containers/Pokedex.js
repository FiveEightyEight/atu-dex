import React from 'react'
import './Pokedex.css'
import PokeIndex from '../components/PokeIndex';



const Pokedex = (props) => {

    return (
        <>
            <div className='offset-1 col-10 container nes-container row'>
                {props.pokedex.map( (pokemon, i) => {
                    return <PokeIndex pokeInfo={pokemon} handleIndexClick={props.handleIndexClick} key={i}/>
                }) } 
            </div>
        </>
    )
};

export default Pokedex;