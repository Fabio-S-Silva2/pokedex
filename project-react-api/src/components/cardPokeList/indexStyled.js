import styled from "styled-components";
import BackgroundImg from "../../assets/backgroundImage.png";

export const CardContainer = styled.section`
  max-height: 300vh;
  min-height: 90vh;
  max-width: 100vw;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #5e5e5e;
`;

export const Card = styled.section`
  margin: 3.5% 1% 2.5% 1%;
  padding: 0% 0 0 0;
  height: 29vh;
  width: 30vw;
  background-color: ${(prop) => prop.backGroundForTypes};
  display: flex;
  flex-direction: row;
  align-items: stretch;
  align-content: stretch;
  border-radius: 0.3rem;
`;

export const InsideContainerLeft = styled.section`
  width: 12vw;
  height: 25vh;
  font-size: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  flex-wrap: nowrap;
  align-items: baseline;

  & h1 {
    color: #ffffff;
  }
  & h4 {
    color: #ffffff;
    font-size: 1.5rem;
    margin: 0 0 10% 10%;
  }
  & p {
    color: #ffffff;
    margin: 10% 0% -15% 10%;
  }

  & button {
    background-color: #76a866;
    border-radius: 0.3rem;
    border: none;
    margin: 35% 0% -8% 10%;
    text-decoration: underline;
    color: #ffffff;
    font-size: 0.8rem;
  }
`;

export const SectionTypes = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  gap: 5%;
`;
export const SectionType1 = styled.section`
  position: absolute;
  height: auto;
  width: 2.5vw;
  padding: 0.5% 2% 0.7% 0.5%;

  background: ${(prop) => prop.backGroundTypes};
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
  color: #ffffff;
  margin: 0% 21% 0% 1.2%;
  display: flex;

  & h1 {
    margin-left: 15%;
  }
`;
export const SectionType2 = styled.section`
  position: absolute;
  height: auto;
  width: 2.5vw;
  padding: 0.5% 2% 0.7% 0.5%;
  background: ${(prop) => prop.backGroundTypes};
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
  color: #ffffff;
  margin: 0% 0% 0% 7%;
  display: flex;

  & h1 {
    margin-left: 15%;
  }
`;

export const InsideContainerRight = styled.section`
  width: 18vw;
  height: 25vh;
`;

export const ImgBacground = styled.section`
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: auto;
  height: 110%;
  display: flex;
  flex-direction: column;

  & button {
    position: absolute;
    height: auto;
    width: 9.3%;
    padding: 0.3% 8% 0.4% 1%;
    border-radius: 0.3rem;
    background-color: #ffffff;
    border: none;
    margin: 11% 0% 0% 6.5%;
  }

  & img {
    position: relative;
    margin: -32% 0% 20% 20%;
    padding: 0;
    width: 78%;
    height: 100%;
  }
`;
