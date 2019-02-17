import React from 'react'
import './Pokedex.css'
// import PokeIndex from '../components/PokeIndex';



const Pokedex = (props) => {
    // props.handleIndexClick
    return (
        <>
            <div className='offset-1 col-10 container nes-container row'>
            {/* <h2 className='col-12 nes-container'>HELLO WORLD</h2> */}
                {/*props.pokedex.map( (pokemon, i) => {
                    return <key={i}> <PokeIndex pokeInfo={pokemon} handleIndexClick={props.handleIndexClick}/> </>
                }) */}
            </div>
        </>
    )
};

export default Pokedex;