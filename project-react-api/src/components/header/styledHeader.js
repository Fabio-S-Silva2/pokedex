import styled from "styled-components";



export const ContainerHeader = styled.header`
margin: 2vh 2vw 1vh 2vw;
  width: 96vw;
  height: 10vh;
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  
 & img{
    width: 20vw;
    height: 10vh;
    position: relative;
  }

  
`

export const StyledButton =styled.button`
background-color: ${(prop) => prop.backGroundColor};
`
  






