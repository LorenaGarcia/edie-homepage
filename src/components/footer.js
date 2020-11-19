import React from "react";
import styled from "styled-components";
import instagram from "../images/instagram.svg";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";

const Footer = () => {
  return (
    <Container>
      <Column1>
        <ContainerMenu>
          <Menu>Home</Menu>
          <Menu>Services</Menu>
          <Menu>Our Works</Menu>
          <Menu>Clients</Menu>
          <Menu>Contact</Menu>
        </ContainerMenu>
      </Column1>
      <Column2>
        <ContainerMenu>
          <TextColumn2>Edie</TextColumn2>
          <ContainerImages>
            <Image src={instagram} />
            <Image src={twitter} />
            <Image src={linkedin} />
          </ContainerImages>
        </ContainerMenu>
      </Column2>
      <Column3>
        <TextColumn3>Want us to contact you?</TextColumn3>
        <Input type="text" placeholder="Email" />
        <Button>Join</Button>
      </Column3>
      <Name>
        <MyName>Lorraine @ DevChallenges.io</MyName>
      </Name>
    </Container>
  );
};

export default Footer;

export const Container = styled.div`
  display: grid;
  grid-gap: 10px;
  margin: 20px;
`;

export const Column1 = styled.div`
  width: 100%;
  height: 30vh;
  grid-column: 1 / 1;
  grid-row: 1 / 1;

  @media (max-width: 480px) {
    grid-column: 1 / 4;
    grid-row: 1 / 1;
  }
`;

export const Column2 = styled.div`
  width: 100%;
  height: 30vh;
  grid-column: 2 / 2;
  grid-row: 1 / 1;

  @media (max-width: 480px) {
    height: 15vh;
    grid-column: 1 / 4;
    grid-row: 2 / 2;
  }
`;

export const Column3 = styled.div`
  width: 100%;
  height: 30vh;
  grid-column: 3 / 3;
  grid-row: 1 / 1;

  @media (max-width: 480px) {
    height: 20vh;
    grid-column: 1 / 4;
    grid-row: 3 / 3;
  }
`;

export const Name = styled.div`
  width: 100%;
  height: 10vh;
  grid-column: 1 / 4;
  grid-row: 2 / 2;
  @media (max-width: 480px) {
    margin-top: 70px;
    grid-column: 1 / 4;
    grid-row: 4 / 4;
  }
`;

export const ContainerMenu = styled.div`
  padding-top: 20px;
  padding-left: 30%;

  @media (max-width: 480px) {
    padding-left: 0px;
  }
`;

export const Menu = styled.li`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 200%;
  color: #ffffff;
  list-style: none;
`;

export const MyName = styled.p`
  text-align: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #a9a9a9;
`;

export const TextColumn2 = styled.p`
  font-family: Heebo;
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 53px;
  color: #f2f2f2;
  margin-top: 0px;
  margin-bottom: 9px;
`;

export const ContainerImages = styled.div`
  width: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    width: 30%;
  }

  @media (min-width: 481px) and (max-width: 1020px) {
    width: 70%;
  }
`;

export const Image = styled.img`
  width: 24px;
  height: 24px;
  object-fit: cover;
  display: block;
`;

export const TextColumn3 = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #f2f2f2;
`;

export const Input = styled.input`
  width: 60%;
  height: 45px;
  left: 953px;
  top: 5529px;
  background: #f2f2f2;
  border-radius: 12px;
  border: 0px;
  padding-left: 20px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #bdbdbd;
`;

export const Button = styled.button`
  margin-left: -98px;
  width: 94px;
  height: 40px;

  background: #2d9cdb;
  border-radius: 12px;
  border: 0px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #f2f2f2;
`;
