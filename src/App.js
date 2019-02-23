import React, { Component } from 'react';
import pokemon from './pokemon'
import NavBar from './components/NavBar';
import Pokedex from './containers/Pokedex';
import PokeProfile from './containers/PokeProfile';
import { buildPokemon, buildMove, loadPokedex } from './main';

let pokemonNames = Object.keys(pokemon);
const js = { uName: "JavaScript", type: "Functional", power: "85%", pp: "99", };
const html = { uName: "HTML", type: "Markup", power: "75%", pp: "99", };
const html5 = { uName: "HTML5", type: "Markup", power: "75%", pp: "99", }
const css = { uName: "CSS", type: "Markup", power: "36%", pp: "99", }
const css3 = { uName: "CSS3", type: "Markup", power: "38%", pp: "99", }
const react = { uName: "REACT", type: "Framework", power: "40%", pp: "99", };
const nodejs = { uName: "NodeJS", type: "Framework", power: "66%", pp: "99", };
const robert = {
  moves: ['JS', 'NodeJS', 'HTML', 'CSS'],
  name: "Five",
  number: "588",
  picture: "https://lh3.googleusercontent.com/rA2RNrLVDuu1g60B-CA1ueP1TQ-_WlYO7s3ATGGz1YJiaYmK35p3EJVmIFsSu31xnmGJQIIxcLuq7kxZ10dUGQ4SfxoJEHT2bw2VpRc3TmM4Zun8m9Aq4_YDAb1iQjQRroa-xBVNgA7HXpQkX5uotEM-QV8no_QHl0WFde-cDSaZ2qDBfk7ZGOKN7-E0y_TVIrzfNq_Z5tOGxmRUxM_tAuyEJ6EJfoPV4AqWAnTSx_VW11s3qVUR7VWWTMX1ZuaBa1eUiHhc9NBHwnIU1ZnBhpMcAuZneoEHUubRuNUSIYmyYB-iNClr-xOk9CcaQqY2U4vXQspxEdo7OcngSxb4jYwUw5Y7Mw0HlPT8DnwTJF-cxZZmt_W11-OLUCXddaiT3Wp3ZPi54dqhDRY03o4tni_8YynQAXo9As7WzkGRCM-U12N4iGBYXR6R2laQzqYJArEbmvjO0YoduKsBdLMDYVAo2_omkz7Xlx2ErXVw4yAUPgL3cdr4aGzwT30U2UQFLIljBPQaEk8RlXcomC1MY4mJPmhzgggCQhX73zmJy7UgR6uxvL7CmrXBOTGxtb4nYTZcbm0MZjZgGNNd2edIBx9gpuzBvx8G7XaMkjE3nggZGU7gzcVAcvhbQ5bYrO2MyRPap4b85SUHfD68ZUJThVRH-DsEC2wa8vRorh37mGgPLUbRpa65DDKS8Zo9_ExRyodKk_2jS1ZUNIQT6B__WWD_=w370-h807-no",
  sprites: [{ name: "Default", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png" }, { name: "Shiny", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png" }, { name: "Default", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png" }, { name: "Shiny", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/493.png" }],
  stats: [{ name: "HP", base_stat: 100 },
  { name: "Attack", base_stat: 100 },
  { name: "Defense", base_stat: 100 },
  { name: "Sp.Attack", base_stat: 100 },
  { name: "Sp.Defense", base_stat: 100 },
  { name: "Speed", base_stat: 100 }],
  types: ["Dragon", "Fire"]
};

const heri = {
  index: 0,
  moves: ['JS', 'CSS3', 'HTML5', 'React'],
  name: "Heriberto",
  number: "813", // pick a number
  picture: "https://lh3.googleusercontent.com/2mndNz_NBLKZM8W8rnP6M7uvXLEhvqbdRtIb8peE4WP4PKcF74hkRyue2n5UttK9LzsSIBQIZXho3RgMpmK8fgSs60y0BwYTlxeenqwQkBiXdMJTEdbd51CBHTyFE9wCn00qTwO0IxJaQd6XvQfSHLl4Y-2y0huX7TrJffROnXzQ_I2OnhaTCtotezXdMHyTpslEVRZnxSyp085FIaeoxpJybSW2_RmzmS1WhbGDvSA6kgbbSXmuby02YbZntUdNdvpdQd9wijHthVHKKXw-lhAEqmr_we-yQokwqIpI-jQOLlmCK-_ORiCc28ljG-KWq-qCBQgNFxS-kXyFRBngxvOcH5o03voGFm3n2idFwS2vPvVCTybcsfFiGesARrMuX8ieLSAq-os0MJHPjOqitEFrX2fxChlAw49T4nGC1B3TN2mZINrsg9gNdXnY8HW59k3QqZkA64Zu-nxkuk__EH0-M20hkABFSZauuh5v8GvEuta24wC57wMZ_AlV47Qtcr00y52lz9_JafSAllwsmaIq5hbV3AYDZ37kImCsy2mjY3zAGH-ZT-tDqQ6VMTfBAzqfoTxyxt5g9mr75sy1VKAT9FapdE7rGqBpr5zr7tykT-hLbi9PdVvSnfidTBWuwzolt4Tb85PG2E_DgNda_R76yehWxLK6dlKq44zAbArbHY3s-hAjK_QrouBGzo81TcbNFT_S_hshxnUDV14kDBZT=w393-h807-no",
  sprites: [{ name: "Shiny", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/94.png" },
  { name: "Default", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png" },
  { name: "Default", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/157.png" },
  { name: "Shiny", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/249.png" }], // our favorite pokemons
  stats: [{ name: "HP", base_stat: 9001 },
  { name: "Attack", base_stat: 9001 },
  { name: "Defense", base_stat: 9001 },
  { name: "Sp.Attack", base_stat: 9001 },
  { name: "Sp.Defense", base_stat: 90001 },
  { name: "Speed", base_stat: 8999 }], // you pick or set to default
  types: ["Ghost", "Fire"]
};

const van = {
  index: 0,
  moves: ['JS', 'CSS3', 'HTML5', 'React'],
  name: "The MiniVan ",
  number: "323", // pick a number
  picture: "https://lh3.googleusercontent.com/Yuvz7XHOeIiu2KmpAkRKFzqE8TZsZpnWkaIcCWm3PxxjfyEqLB3r6Dvwf-8v-4DVOBt1WvIuy8v7U2f0Cx2i-3cTdKx52KrGc-ploa1_t7jZUFa5eSab_ot9adL1ppytcpvFoQ2WJbJn1tWJAZwQTGejlyNdS8ZDLpeEVp3n8gOrko5SjQlFLEMpIrSoe0OtHTqoG7x9qCGRjdqW48XrKo0XwT6gNlTfw2Yzs1p1x6VG26HN7uMdmq7rrw_zCgZkk-FTtgARsaxl4nxZ0l0Fd_kvK0JJ2EXYfNBpMlAbXfFSs7IZ2UTbhHhQERN6g19T_QnpMnjMH0KnsKLrNIKkBJgKM6BHOBuP3UyiEfaWyz6zbQSsu0sNpRyCgTBHdHjWYjeIYQf75O2Rxx39P5-HB9fxJsqoGesZ_POkO4Q-LxYG0xBgKPFBU3fFPPqNj9IgjsdjXARGlpX41q1kXKrlhoqRg2ThTyl4ETzEgWUaK_S2pwYf1wYZIMmhhzJF_BFw3oaDudCPI5P-vGYUecPV7fGnII6B5qobwevkSM__yElhuvSoZ3HFVJuoyKifwrZBxLCnxYyQnRceohT5G4ZkdMoMDdMaGLZ9AnTAQNbT66FM3SvApmrJQhQPV_b6d9eBX_cRhyC1dFw8wbJn_tVTzq3vgWVoDEC_2eEz5jmar_3INNqBUVAvSCS5HxgFS_eQAy7-qdmXvYDCmuo_wtmrC9Qm=w403-h807-no",
  sprites: [{ name: "Shiny", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png" },
  { name: "Shiny", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png" },
  { name: "Shiny", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/39.png" },
  { name: "Shiny", sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/117.png" }], // our favorite pokemons
  stats: [{ name: "HP", base_stat: 100 },
  { name: "Attack", base_stat: 100 },
  { name: "Defense", base_stat: 100 },
  { name: "Sp.Attack", base_stat: 100 },
  { name: "Sp.Defense", base_stat: 100 },
  { name: "Speed", base_stat: 100 }], // you pick or set to default
  types: ["Poison", "water"]
};
pokemonNames.push('robert', 'heriberto', 'van')
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
      currentMove: { uName: "", type: "", power: "", pp: "", },
      offSet: 0,
      sprite: 'Default',
      loading: true,
      masterList: pokemon,
    }
  }

  componentDidMount() {
    // Populate Pokedex on page load
    // const obj = this.handleLimit();
    // if (!obj) return;
    const savedPokemon = JSON.parse(localStorage.getItem('pokemons')) || {};
    const savedMoves = JSON.parse(localStorage.getItem('pokemoves')) || {};
    savedPokemon['robert'] = robert;
    savedPokemon['heriberto'] = heri;
    savedPokemon['van'] = van;
    savedMoves['JavaScript'] = js;
    savedMoves['JS'] = js;
    savedMoves['React'] = react;
    savedMoves['HTML'] = html;
    savedMoves['HTML5'] = html5;
    savedMoves['NodeJs'] = nodejs;
    savedMoves['CSS'] = css;
    savedMoves['CSS3'] = css3;
    loadPokedex(this.state.offSet, this.state.pokedex)
      .then(tempDex => {
        this.setState({
          pokemon: savedPokemon,
          moves: savedMoves,
          pokedex: tempDex,
          offSet: 20,
          loading: false,
        })
      })
      .catch(err => {
        console.log('error loadingPokeDex: ', err)
      })
    window.addEventListener('scroll', e => {
      this.handleScroll(e)
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
    console.log('Here handleIndexClick')
    let pokemon = e.target.id;
    if (pokemon.includes(' ')) {
      pokemon = pokemon.replace(' ', '-')
    }
    this.checkPokemon(pokemon);
    return;
  };

  handleDrpDwnOnClick = (e) => {
    const search = e.target.value.toLowerCase();
    if (!pokemonNames.includes(search)) return;
    this.checkPokemon(search);
    e.target.value = '';
    // console.log (e.target.value)
  }

  handleMoveClick = (e) => {
    // clicking on a move component will trigger this function
    console.log(e.target.id)
    this.checkMove(e.target.id)
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
        localStorage.setItem('pokemons', JSON.stringify(pokemonObj))
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
        localStorage.setItem('pokemoves', JSON.stringify(movesObj))
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
    if (this.state.view > 0) return;
    const lastDiv = document.querySelector('div.js-dex > div:last-child')
    let lastDivOffset = lastDiv.offsetTop + lastDiv.clientHeight;
    let pageOffset = window.pageYOffset + window.innerHeight;
    let bottomOffset = 20;
    if (pageOffset > lastDivOffset - bottomOffset) {
      this.handleTempLoad()
    }
    return;
  }

  expandDex = (length) => {
    const arr = [];
    let setupDex = [...this.state.pokedex]
    for (let i = 0; i < length; i++) {
      arr.push(null);
    }
    return new Promise((resolve, reject) => {
      resolve(setupDex = setupDex.concat(arr))
    })

  }

  handleTempLoad = (e) => {
    const obj = this.handleLimit();
    if (!obj) return;
    const { offSet, newLimit } = obj;
    // loadPokedex(this.state.limit, this.state.pokedex)
    this.expandDex(newLimit)
      .then(setupDex => {
        this.setState({
          pokedex: setupDex,
          loading: true,
        })
        return;
      })
      .then( _ => {
        return loadPokedex(offSet, this.state.pokedex, newLimit)
      })
      .then(tempDex => {
        this.setState({
          pokedex: tempDex,
          offSet: offSet + 20,
          loading: false,
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
            <Pokedex pokedex={this.state.pokedex} handleIndexClick={this.handleIndexClick} loading={this.state.loading} />
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
                modal={this.state.currentMove} />
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
            <NavBar pokemonList={pokemonNames} handleSearch={this.handleSearch} handleDrpDwnOnClick={this.handleDrpDwnOnClick} />
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
