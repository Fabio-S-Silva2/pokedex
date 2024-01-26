
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { DetailsPage } from "../pages/detailPage/DetailsPage";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";
import { PokemonsList } from "../pages/pokemonsListPage/PokemonsListPage";
import { PokedexPage } from "../pages/pokedexPage/PokedexPage";
import { useState } from "react";
import { Header } from "../components/header/Header";

export const Router = () => {
  const [displaySon, setDisplaySon]=useState(false)
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<PokemonsList displaySon={displaySon} />} />
      <Route path="/pokemons_details" element={<DetailsPage />} />
      <Route path="/pokedex_page" element={<PokedexPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
   </BrowserRouter>
  );
};
