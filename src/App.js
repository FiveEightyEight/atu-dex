import React, { Component } from 'react';
import pokemon from './pokemon'
import NavBar from './components/NavBar';
import { getPokemonData, buildPokemon, buildMove, loadPokedex } from './main';

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
    // Populate Pokedex on page load
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

  handleSearch = (e) => {
    // hitting enter in the searchBar will trigger this function
    if (e.keyCode === 13) {
      const search = e.target.value;
      if(!pokemonNames.includes(search)) return;
      this.checkPokemon(search);
    };
  };

  handleClick = (e) => {
    // clicking on a pokeIndex component will trigger this function
    return;
  }

  checkPokemon = (name) => {
    // checks if pokemon name is cached, if it is, sets state.pokemon to selected pokemon
    // else fetches pokemon info
    // NOTE: This is the ONLY function that will change state.currentPokemon
    const cleanName = name.trim().toLowerCase();
    if(this.state.pokemon[cleanName]) {
      const currentPokemon = this.state.pokemon[cleanName]
      this.setState({
        currentPokemon: currentPokemon,
        view: 1, 
      })
    } else {
      this.addPokemon(cleanName);
    }
  };

addPokemon = (name) => {
  // triggered by clicking on a pokeIndex or entering a pokemon name in the searchBar
  // will invoke this.checkPokemon which will update currentPokemon
  const cleanName = name.trim().toLowerCase();
  buildPokemon(cleanName)
  .then( data => {
    const pokemonObj = this.state.pokemon;
    pokemonObj[cleanName] = data;
    this.setState({
      pokemon: pokemonObj
    }, _=> {
      this.checkPokemon(cleanName);
    })
  })
  .catch(err => {
    console.log('err: ', err);
  })
};

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
