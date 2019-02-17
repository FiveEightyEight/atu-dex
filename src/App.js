import React, { Component } from 'react';
import pokemon from './pokemon'
import SearchBar from './components/SearchBar';
import Tags from './components/Tags';
import Moves from './components/Moves';

//const pokemonNames = Object.keys(pokemon);


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
        <Moves move1={'FirstAttack'} move2={'SecondAttack'} move3={'ThirdAttack'} />
      </>
    );
  }
}

export default App;
