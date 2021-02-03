import React from "react";
import styled from "styled-components";

const Menu = () => {
  return (
    <Container>
      <ContainerLeft>
        <TitleLeft>Edie</TitleLeft>
      </ContainerLeft>
      <ContainerRigth>
        <ContainerMenuMobile>
          <i class="material-icons menu">menu</i>
        </ContainerMenuMobile>
        <ContainerList>
          <List>Home</List>
          <List>Services</List>
          <List>Our Works</List>
          <List>Clients</List>
          <List>Contact</List>
        </ContainerList>
      </ContainerRigth>
    </Container>
  );
};

export default Menu;

export const Container = styled.div`
  width: 100%;
  height: 60%;
`;

export const ContainerLeft = styled.div`
  width: 40%;
  height: 100%;
  float: left;

  /* @media (min-width: 481px) and (max-width: 1020px) {
    width: 20%;
  } */
`;

export const ContainerRigth = styled.div`
  width: 60%;
  height: 100%;
  float: right;

  /* @media (min-width: 481px) and (max-width: 1020px) {
    width: 80%;
  } */
`;

export const TitleLeft = styled.div`
  font-family: Heebo;
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 53px;
  color: #333333;
  padding: 30px;
`;

export const List = styled.li`
  list-style: none;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #333333;
`;

export const ContainerList = styled.ul`
  padding: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  @media (max-width: 480px) {
    display: none;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    display: none;
  }
`;

export const ContainerMenuMobile = styled.div`
  padding: 30px;
  cursor: pointer;
  display: none;

  @media (max-width: 480px) {
    display: block;
    text-align: right;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    display: block;
    text-align: right;
  }
`;
