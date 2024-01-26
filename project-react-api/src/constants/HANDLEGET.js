import axios from "axios";
import { BASE_URL } from "./BASE_URL";




export const handleGEt= async (path)=>{
    try {
            const res = await axios.get(`${BASE_URL}${path}`
            );
            const {results}= res.data

            const searchInfo = await Promise.all( 
              results.map(async pokemon => {
              const {id, types} = await getPokemonsByName(pokemon.name);
              console.log(id,types);
              return {
                name:pokemon.name,
                id,
                types
              }
            })) ;
            setPokemons([...pokemons, searchInfo]);
          } catch (err) {
            console.log(err.data);
          }
    return (pokemons)
}

export const getPokemonsByName = async (name) => {
 
    const res = await axios.get(`${BASE_URL}${name}`);

    const {id, types}=res.data;

    return {
    id, types
    }
 
}
