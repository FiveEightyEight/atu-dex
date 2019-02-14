import React, { Component } from 'react';
import pokemon from './pokemon'
import SearchBar from './components/SearchBar';
const pokemonNames = Object.keys(pokemon);
import Tags from './components/Tags';



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
  // this.state.pokemon['charmander']; 
  render() {
    return (
      <>
        <h1>Hello World!</h1>
      </>
    );
  }
}

export default App;
