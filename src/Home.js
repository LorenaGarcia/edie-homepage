import React from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Introducction from "./components/Introduction";
import Offer from "./components/Offer";

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
      <GoodDesignContainer />
      <TeamContainer />
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
  grid-row: 1 / 1;
`;

export const IntroductionContainer = styled.div`
  width: 100%;
  height: 100vh;
  grid-column: 1 / 1;
  grid-row: 2 / 2;
`;

export const OfferContainer = styled.div`
  width: 100%;
  height: 60vh;
  grid-column: 1 / 1;
  grid-row: 3 / 3;
`;

export const GoodDesignContainer = styled.div`
  width: 100%;
  height: 120vh;
  grid-column: 1 / 1;
  grid-row: 4 / 4;
`;

export const TeamContainer = styled.div`
  width: 100%;
  height: 70vh;
  grid-column: 1 / 1;
  grid-row: 5 / 5;
`;

export const CommentContainer = styled.div`
  width: 100%;
  height: 50vh;
  grid-column: 1 / 1;
  grid-row: 6 / 6;
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 50vh;
  grid-column: 1 / 1;
  grid-row: 7 / 7;

  background-color: #100e1d;

  @media (max-width: 480px) {
    height: 95vh;
  }
`;
