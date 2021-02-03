import React from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Introducction from "./components/Introduction";
import Offer from "./components/Offer";
import GoodDesign from "./components/GoodDesign";
import Team from "./components/Team";

const Home = () => {
  return (
    <Container>
      <Header>
        <Menu />
      </Header>
      <IntroductionContainer>
        <Introducction />
      </IntroductionContainer>
      <OfferContainer>
        <Offer />
      </OfferContainer>
      <GoodDesignContainer>
        <GoodDesign />
      </GoodDesignContainer>
      <TeamContainer>
        <Team />
      </TeamContainer>
      <CommentContainer />
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
};

export default Home;

export const Container = styled.div`
  display: grid;
  grid-gap: 10px;
`;

export const Header = styled.div`
  width: 100%;
  grid-column: 1 / 1;
  grid-row: 1 / 2;
`;

export const IntroductionContainer = styled.div`
  width: 100%;
  grid-column: 1 / 1;
  grid-row: 2 / 3;
`;

export const OfferContainer = styled.div`
  width: 100%;
  grid-column: 1 / 1;
  grid-row: 3 / 4;
`;

export const GoodDesignContainer = styled.div`
  width: 100%;
  /* height: 120vh; */
  grid-column: 1 / 1;
  grid-row: 4 / 5;
`;

export const TeamContainer = styled.div`
  width: 100%;
  grid-column: 1 / 1;
  grid-row: 5 / 6;
  margin-bottom: 100px;
`;

export const CommentContainer = styled.div`
  width: 100%;
  grid-column: 1 / 1;
  grid-row: 6 / 7;
`;

export const FooterContainer = styled.div`
  width: 100%;
  grid-column: 1 / 1;
  grid-row: 7 / 8;

  background-color: #100e1d;

  @media (max-width: 480px) {
    height: 100vh;
  }
`;
