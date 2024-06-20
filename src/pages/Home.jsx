import React from "react";
import backgroundImage from "../../Assets/mile1-assets/home-banner.png";
import styled from "styled-components";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Container = styled.div`
  background-image: url(${backgroundImage});
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

const HeaderWrapper = styled.div`
  background-color: #ce2829;
  color: white;
  padding: 50px 0;
  padding-bottom: 20px;
  text-align: center;
  font-size: 1.5em;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

const HeaderText = styled.h1`
  margin: 0;
  font-weight: 900;
  font-family: "Roboto Condensed";
  font-size: 45px;
`;
const ItalicLetter = styled.span`
  font-style: italic;
`;

const Main = styled.div`
  font-family: "Roboto Condensed";
  font-size: 60px;
  color: white;
  font-style: normal;
  font-weight: 200;
  margin-top: 8rem;
  max-width: 30%;
  justify-content: center;
  display: flex;
  margin-left: 35%;
  z-index: 1;
`;
const OrderButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1;
`;

const OrderButton = styled(Button)`
  background-color: #fdc913;
  color: black;
  font-family: "Barlow";
  font-size: large;
  font-weight: bold;
  width: 10rem;
  margin-top: 0;
  border-radius: 10%;

  &:hover {
    background-color: #e0b313;
  }
`;

function Home() {
  const history = useHistory();

  const handleClick = () => {
    {
      history.push("/orderpizza");
    }
  };

  return (
    <>
      <Container>
        <HeaderWrapper>
          <HeaderText>
            Teknolojik <ItalicLetter>Y</ItalicLetter>emekler
          </HeaderText>
        </HeaderWrapper>
        <Main>KOD ACIKTIRIR PİZZA, DOYURUR</Main>
        <OrderButtonWrapper>
          <OrderButton onClick={handleClick}>ACIKTIM</OrderButton>
        </OrderButtonWrapper>
      </Container>
    </>
  );
}

export default Home;
