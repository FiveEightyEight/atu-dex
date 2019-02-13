import axios from 'axios';
/*
const getMoveList = (poke_name = `bulbasaur`) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${poke_name}`)
    .then(response => {
      const { data } = response; // this is object of API response
      console.log('DATA',data.moves.map(moveName => {
        return moveName.move.name
      }))
    })
}
console.log(getMoveList())
*/


const getTags = (poke_name = `bulbasaur`) => {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/${poke_name}`)
        .then(response => {
            const { data } = response; // this is object of API response
            console.log('DATA', data.types.map(types => {
                return types.type.name
            }))
        })
}
console.log(getTags())


