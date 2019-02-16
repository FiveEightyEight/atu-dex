import React, { Component } from 'react';
import pokemon from './pokemon'
import NavBar from './components/NavBar';

const pokemonNames = Object.keys(pokemon);




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 0,
      containerView: ['Pokedex', 'Profile'],
      Pokedex: [],
      masterList: pokemon,
    }
  }

  testChange = (e) => {
    if (e.keyCode === 13) {
      console.log(e.target.value)
    }
    // console.log(e.target.value);

  }
  // this.state.pokemon['charmander']; 
  render() {
    return (
      <>
        <h1>Hello World!</h1>
        <NavBar pokemonList={pokemonNames} get={this.testChange}/>
      </>
    );
  }
}

export default App;
