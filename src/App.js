import React, { Component } from 'react';
import pokemon from './pokemon'
import NavBar from './components/NavBar';
import Pokedex from './containers/Pokedex';
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
      .then(tempDex => {
        this.setState({
          pokedex: tempDex,
          limit: 20,
        })
      })
      .catch(err => {
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
      if (!pokemonNames.includes(search)) return;
      this.checkPokemon(search);
    };
  };

  handleIndexClick = (e) => {
    // clicking on a pokeIndex component will trigger this function
    const pokemon = e.target.id;
    this.checkPokemon(pokemon);
    return;
  };

  handleMoveClick = (e) => {
    // clicking on a move component will trigger this function
    return;
  };

  checkPokemon = (name) => {
    // checks if pokemon name is cached, if it is, sets state.currentPokemon to selected pokemon
    // else fetches pokemon info
    // NOTE: This is the ONLY function that will change state.currentPokemon
    const cleanName = name.trim().toLowerCase();
    if (this.state.pokemon[cleanName]) {
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
    // will invoke this.checkPokemon which will update state.currentPokemon
    const cleanName = name.trim().toLowerCase();
    buildPokemon(cleanName)
      .then(data => {
        const pokemonObj = this.state.pokemon;
        pokemonObj[cleanName] = data;
        this.setState({
          pokemon: pokemonObj
        }, _ => {
          this.checkPokemon(cleanName);
        })
      })
      .catch(err => {
        console.log('err: ', err);
      })
  };

  checkMove = (name) => {
    // checks if move name is cached, if it is, sets state.currentMove to selected move
    // else fetches move info
    // NOTE: This is the ONLY function that will change state.currentMove
    const cleanName = name.trim().toLowerCase();
    if (this.state.moves[cleanName]) {
      const currentMove = this.state.moves[cleanName]
      this.setState({
        currentMove: currentMove,
        view: 2,
      })
    } else {
      this.addMove(cleanName);
    }
  };

  addMove = (name) => {
    // triggered by clicking on a Move in pokeProfile
    // will invoke this.checkMove which will update state.currentMove
    const cleanName = name.trim().toLowerCase();
    buildMove(cleanName)
      .then(data => {
        const movesObj = this.state.moves;
        movesObj[cleanName] = data;
        this.setState({
          moves: movesObj
        }, _ => {
          this.checkMove(cleanName);
        })
      })
      .catch(err => {
        console.log('err: ', err);
      })
  };


  handleScroll = (e) => {
    console.dir(e)
  }

  handleTempLoad = (e) => {
    let newLimit = this.state.limit;
    loadPokedex(this.state.limit, this.state.pokedex)
      .then(tempDex => {
        if ((809 - newLimit) >= 20) {
          newLimit += 20;
        }
        else {
          newLimit += (809 - newLimit);
        }
        this.setState({
          pokedex: tempDex,
          limit: newLimit,
        })
      })
      .catch(err => {
        console.log('error loadingPokeDex: ', err)
      })
  }

  //'Pokedex', 'Profile', 'Move'
  handleView = (page) => {
    switch (page) {

      case 'Pokedex':
        return (
          <div className='offset-1 col-10 nes-container row' >
            <Pokedex pokedex={this.state.pokedex} handleIndexClick={this.handleIndexClick} />
            <button className='col-12 nes-btn is-error' onClick={this.handleTempLoad}>Load More</button>
          </div>
        );

      case 'Profile':
        return (
          <>
          </>
        );

      case 'Move':
        return (
          <>
          </>
        );

      default:
        return this.renderPage('Pokedex');
    }
  }

  render() {
    return (
      <>
        <div className='m-2 nes-container' onScroll={this.handleScroll}>
          <nav className='navbar sticky-top bg-white row '>
            <NavBar pokemonList={pokemonNames} handleSearch={this.handleSearch} />
          </nav>
          <hr />
          <div className='row'>
            {this.handleView(this.state.containerView[this.state.view])}
          </div>
        </div>
      </>
    );
  }
}

export default App;
