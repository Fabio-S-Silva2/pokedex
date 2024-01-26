import { useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../routes/coordination";
import {
  Card,
  CardContainer,
  InsideContainerLeft,
  InsideContainerRight,
  ImgBacground,
  SectionTypes,
  SectionType1,
  SectionType2,
} from "./indexStyled.js";
import { Header } from "../header/Header";
import { getColor, getColorCard } from "../../constants/ColorTypes";
import { getImage } from "../../constants/imageForType";

const CardPokeList = ({ pokemons }) => {
  const navigate = useNavigate();

  const capiturarPokemon = () => {
    return;
  };

  const card = (
    <CardContainer>
      {pokemons.map((pokemom, i) => {
        const { name, types, sprites } = pokemom;

        if (types.length <= 1) {
          return (
            <Card
              key={pokemom.id}
              backGroundForTypes={() => getColorCard(types[0].type.name)}>
              <InsideContainerLeft>
                {i + 1 < 10 ? <p>#0{i + 1}</p> : <p>#{i + 1}</p>}
                <h4>{name}</h4>

                <SectionTypes>
                  <SectionType1
                    backGroundTypes={() => getColor(types[0].type.name)}>
                    <img src={getImage(types[0].type.name)} alt="image" />
                    <h1>{types[0].type.name}</h1>
                  </SectionType1>
                </SectionTypes>

                <button onClick={() => goToDetailsPage(navigate)}>
                  Detalhes
                </button>
              </InsideContainerLeft>

              <InsideContainerRight>
                <ImgBacground>
                  <img
                    src={sprites.other.home.front_default}
                    alt="imagem do pokemon"
                  />

                  <button>Capturar!</button>
                </ImgBacground>
              </InsideContainerRight>
            </Card>
          );
        } else {
          return (
            <Card
              key={pokemom.id}
              backGroundForTypes={() => getColorCard(types[0].type.name)}>
              <InsideContainerLeft>
                {i + 1 < 10 ? <p>#0{i + 1}</p> : <p>#{i + 1}</p>}
                <h4>{name}</h4>
                <SectionTypes>
                  <SectionType1
                    backGroundTypes={() => getColor(types[0].type.name)}>
                    <img src={getImage(types[0].type.name)} alt="image" />
                    <h1>{types[0].type.name}</h1>
                  </SectionType1>

                  <SectionType2
                    backGroundTypes={() => getColor(types[1].type.name)}>
                    <img src={getImage(types[1].type.name)} alt="image" />
                    <h1>{types[1].type.name}</h1>
                  </SectionType2>
                </SectionTypes>
                <button onClick={() => goToDetailsPage(navigate)}>
                  Detalhes
                </button>
              </InsideContainerLeft>

              <InsideContainerRight>
                <ImgBacground>
                  <img
                    src={sprites.other.home.front_default}
                    alt="imagem do pokemon"
                  />
                  <button>Capturar!</button>
                </ImgBacground>
              </InsideContainerRight>
            </Card>
          );
        }
      })}
    </CardContainer>
  );

  return <section>{card}</section>;
};
export default CardPokeList;
