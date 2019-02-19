import React, { Component } from 'react';
import pokemon from './pokemon'
import NavBar from './components/NavBar';
import Pokedex from './containers/Pokedex';
import PokeProfile from './containers/PokeProfile';
import { buildPokemon, buildMove, loadPokedex } from './main';

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
      currentMove: {uName: "", type: "", power: "",pp: "",},
      offSet: 0,
      sprite: 'Default',
      masterList: pokemon,
    }
  }

  componentDidMount() {
    // Populate Pokedex on page load
    // const obj = this.handleLimit();
    // if (!obj) return;
    loadPokedex(this.state.offSet, this.state.pokedex)
      .then(tempDex => {
        this.setState({
          pokedex: tempDex,
          offSet: 20,
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
      const search = e.target.value.toLowerCase();
      if (!pokemonNames.includes(search)) return;
      this.checkPokemon(search);
      e.target.value = '';
    };
  };

  handleIndexClick = (e) => {
    // clicking on a pokeIndex component will trigger this function
    let pokemon = e.target.id;
    if (pokemon.includes(' ')) {
      pokemon = pokemon.replace(' ', '-')
    }
    console.log(pokemon)
    this.checkPokemon(pokemon);
    return;
  };

  handleMoveClick = (e) => {
    // clicking on a move component will trigger this function
    console.log(e.target.id)
    this.checkMove (e.target.id)
    return;
  };

  handleReturnHome = (e) => {
    this.setState({
      view: 0,
      sprite: 'Default',
    })
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
    const obj = this.handleLimit();
    if (!obj) return;
    const { offSet, newLimit } = obj;
    // loadPokedex(this.state.limit, this.state.pokedex)
    loadPokedex(offSet, this.state.pokedex, newLimit)
      .then(tempDex => {
        console.log('tempDex: ', tempDex)
        // if ((809 - newLimit) >= 20) {
        //   newLimit += 20;
        // }
        // else {
        //   newLimit += (809 - newLimit);
        // }
        this.setState({
          pokedex: tempDex,
          offSet: offSet + 20,
        })
      })
      .catch(err => {
        console.log('error loadingPokeDex: ', err)
      })
  }

  handleLimit = () => {
    let offSet = this.state.offSet
    let newLimit = 20;
    if (offSet >= 806) {
      return false;
    }
    if (offSet > 786) {
      newLimit = (806 - offSet);
      return { offSet, newLimit }
    }
    // offSet += 20; 
    console.log('offSet: ', offSet, 'newLimit: ', newLimit)
    return { offSet, newLimit }
  }

  handleSpriteText = (e) => {
    if (!e.target.id) return;
    if (e.target.id === this.state.sprite) return;
    this.setState({
      sprite: e.target.id,
    })
  };

  //'Pokedex', 'Profile', 'Move'
  handleView = (page) => {
    switch (page) {

      case 'Pokedex':
        return (
          <div className='offset-1 col-10 nes-container with-title row' >
            <h2 className='title'>Index</h2>
            <Pokedex pokedex={this.state.pokedex} handleIndexClick={this.handleIndexClick} />
            <button className='col-12 nes-btn is-error' onClick={this.handleTempLoad}>Load More</button>
          </div>
        );

      case 'Profile':
        return (

          <div className='offset-1 col-10 nes-container with-title row' >
            <h2 className='title'>Pokemon Profile</h2>
            <div className='col-12 row'>
              <PokeProfile 
              pokemon={this.state.currentPokemon} 
              home={this.handleReturnHome} 
              handleSpriteText={this.handleSpriteText} 
              spriteText={this.state.sprite} 
              handleMoveClick={this.handleMoveClick} 
              modal={this.state.currentMove}/>
            </div>
          </div>

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
