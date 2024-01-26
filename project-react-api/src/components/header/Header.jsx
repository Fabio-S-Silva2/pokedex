import { useNavigate } from "react-router-dom";
import { ContainerHeader, StyledButton } from "./styledHeader";
import {
  goToPokedexPage,
  goToPokemonsListPage,
} from "../../routes/coordination";
import Logo from "../../assets/imageLogo.png";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <ContainerHeader>
      <StyledButton
        backGroundColor="#ffffff"
        onClick={() => goToPokemonsListPage(navigate)}>
        Todos pokemons
      </StyledButton>

      <img src={Logo} alt="Pokemons" />

      <StyledButton
        backGroundColor={"#33A4F5"}
        onClick={() => goToPokedexPage(navigate)}>
        Pokedex
      </StyledButton>

      {/* <StyledButton
      backGroundColor="#ffffff"
      onClick={() => 
        goToPokemonsListPage(navigate)
      }>
      Todos pokemons
      </StyledButton> */}
    </ContainerHeader>
  );
};
