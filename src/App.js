import React, { Component } from 'react';
import pokemon from './pokemon'
import NavBar from './components/NavBar';
import { getPokemonData, validate, buildPokemon, buildMove } from './main';

const pokemonNames = Object.keys(pokemon);




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 0,
      containerView: ['Pokedex', 'Profile', 'Move'],
      pokedex: [],
      pokemon: [],
      moves: [],
      currentPokemon: null,
      currentMove: null,
      masterList: pokemon,
    }
  }

  handleSearch = (e) => {
    if (e.keyCode === 13) {
      console.log(e.target.value)
    }

  }

  handlePokedex = (state) => {
    if(state.pokedex.length === 0) {
      return false;
    }
  }

  componentDidMount() {

  }
  // this.state.pokemon['charmander']; 
  render() {
    return (
      <>
        <div className='m-2 nes-container'>
          <NavBar pokemonList={pokemonNames} handleSearch={this.handleSearch} />
        </div>
      </>
    );
  }
}

export default App;
