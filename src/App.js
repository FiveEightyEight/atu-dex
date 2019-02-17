import React, { Component } from 'react';
import pokemon from './pokemon'
import NavBar from './components/NavBar';
import { getPokemonData, validate, buildPokemon, buildMove, loadPokedex } from './main';

const pokemonNames = Object.keys(pokemon);




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 0,
      containerView: ['Pokedex', 'Profile', 'Move'],
      pokedex: [],
      pokemon: {},
      moves: {},
      currentPokemon: null,
      currentMove: null,
      limit: 0,
      masterList: pokemon,
    }
  }

  componentDidMount() {
    // Load Pokedex on page load
    loadPokedex(this.state.limit, this.state.pokedex)
    .then( tempDex => {
      this.setState({
        pokedex: tempDex,
      })
    })
    .catch (err => {
      console.log('error loadingPokeDex: ', err)
    })

  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Previous State: ', prevState)
    console.log('Current State: ', this.state)
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
