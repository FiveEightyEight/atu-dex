import React from 'react'
import './Pokedex.css'
import PokeIndex from '../components/PokeIndex';



const Pokedex = (props) => {

    return (
        <>
            <div className='col-auto container row'>
                {props.pokedex.map((pokemon, i) => {
                    return <PokeIndex pokeInfo={pokemon} handleIndexClick={props.handleIndexClick} key={i} />
                })}
            </div>
        </>
    )
};

export default Pokedex;