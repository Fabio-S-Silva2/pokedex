import { useEffect, useState } from "react";
import { BASE_URL } from "../../constants/BASE_URL";
import axios from "axios";
import CardPokeList from "../../components/cardPokeList/CardPokelist";
import { Pokedex } from "../../components/pokemonCard/CardPokedex";
import { PokedexPage } from "../pokedexPage/PokedexPage";

export const PokemonsList = ({ displaySon }) => {
  const [pokemons, setPokemons] = useState([]);
  const [imagePokemons, setImagePokemons] = useState([]);

  const handleGEt = async (path) => {
    try {
      const res = await axios.get(`${BASE_URL}${path}`);
      const { results } = res.data;

      const searchInfo = await Promise.all(
        results.map(async (pokemon) => {
          const { id, types, sprites } = await getPokemonsByUrl(pokemon.url);

          return {
            name: pokemon.name,
            id,
            types,
            sprites,
          };
        })
      );
      setPokemons(searchInfo);
    } catch (err) {
      console.log(err);
    }
  };

  const getPokemonsByUrl = async (url) => {
    const res = await axios.get(`${url}`);

    const { id, types, sprites } = res.data;

    return {
      id,
      types,
      sprites,
    };
  };
  useEffect(() => {
    handleGEt("pokemon/?limit=21");
  }, []);

  console.log(location);
  return (
    <section>
      {(!displaySon && <CardPokeList pokemons={pokemons} />) || <PokedexPage />}
    </section>
  );
};
