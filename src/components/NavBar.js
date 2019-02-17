import React from 'react';
import './NavBar.css'
import SearchBar from './SearchBar';


const NavBar = (props) => {
    // props.enter.bind(props.enter)
    // console.log(props)
    return (
        <div className='m-2 nes-container'>
            <div className='row'>
                <div className='col-12' style={{ 'height': '20px', 'backgroundColor': 'red' }}> </div>

                <div className='col-12 row p-3 align-middle'>
                    <i className="mt-5 col-1 offset-1 nes-pokeball"></i>

                    <div className='p-3 offset-1 col-6'>
                        <div className='col-12 text-center'><h2 className='p-2'>ATU - Pokedex</h2></div>
                        <SearchBar results={props.pokemonList} handleSearch={props.handleSearch}/>
                    </div>

                    <i className="mt-5 col-1 offset-1 nes-pokeball"></i>
                </div>

            </div>
        </div>
    )
}

export default NavBar;