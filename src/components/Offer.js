import React from "react";
import styled from "styled-components";

const Offer = () => {
  return (
    <Container>
      <ContainerImage>
        <Title>We offer high demand services</Title>
        <Grid>
          <Design>
            <Box>
              <ContainerIcon color={"#2d9cdb"}>
                <i class="material-icons">create</i>
              </ContainerIcon>
              <TitleBox>UI/UX Design</TitleBox>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
                metus ac nulla consequat aliquet id quis turpis.
              </Description>
              <Button>Get started</Button>
            </Box>
          </Design>
          <FrontEnd>
            <Box>
              <ContainerIcon color={"#27AE60"}>
                <i class="material-icons">code</i>
              </ContainerIcon>
              <TitleBox>Front End</TitleBox>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
                metus ac nulla consequat aliquet id quis turpis.
              </Description>
              <Button>Get started</Button>
            </Box>
          </FrontEnd>
          <BackEnd>
            <Box>
              <ContainerIcon color={"#EB5757"}>
                <i class="material-icons">list</i>
              </ContainerIcon>
              <TitleBox>Back End</TitleBox>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a
                metus ac nulla consequat aliquet id quis turpis.
              </Description>
              <Button>Get started</Button>
            </Box>
          </BackEnd>
        </Grid>
      </ContainerImage>
    </Container>
  );
};

export default Offer;

export const Container = styled.div`
  margin-left: 100px;
  margin-top: 200px;
  margin-right: 100px;

  @media (max-width: 480px) {
    margin-left: 0px;
    margin-top: 200px;
    margin-right: 0px;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    margin-left: 0px;
    margin-top: 200px;
    margin-right: 0px;
  }
`;

export const ContainerImage = styled.div`
  padding-right: 30px;
  padding-left: 30px;
`;

export const Title = styled.p`
  width: 346px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #333333;

  @media (max-width: 480px) {
    width: 259px;
    font-size: 24px;
    line-height: 36px;
    padding-left: 30px;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    width: 259px;
    font-size: 24px;
    line-height: 36px;
    padding-left: 30px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 5px;

  @media (max-width: 480px) {
    grid-gap: 30px;
    grid-template-columns: repeat(1, 100%);
  }

  @media (min-width: 481px) and (max-width: 950px) {
    grid-gap: 0px;
    grid-template-columns: repeat(2, 50%);
  }
`;

export const Design = styled.div`
  width: 100%;
  grid-column: 1 / 2;
  grid-row: 1 / 2;

  background: #ffffff;

  cursor: grab;

  &:hover {
    box-shadow: 0px 10px 30px rgba(51, 51, 51, 0.1);
    border-radius: 24px;

    button {
      background-color: #2d9cdb;
      color: #ffffff;
    }
  }

  @media (max-width: 480px) {
    grid-column: 1 / 1;
    grid-row: 1 / 2;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`;

export const FrontEnd = styled.div`
  width: 100%;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  background: #ffffff;
  cursor: grab;

  &:hover {
    box-shadow: 0px 10px 30px rgba(51, 51, 51, 0.1);
    border-radius: 24px;

    button {
      background-color: #2d9cdb;
      color: #ffffff;
    }
  }

  @media (max-width: 480px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
`;

export const BackEnd = styled.div`
  width: 100%;
  grid-column: 3 / 4;
  grid-row: 1 / 2;
  background: #ffffff;
  cursor: grab;

  &:hover {
    box-shadow: 0px 10px 30px rgba(51, 51, 51, 0.1);
    border-radius: 24px;

    button {
      background-color: #2d9cdb;
      color: #ffffff;
    }
  }

  @media (max-width: 480px) {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
`;

export const ContainerIcon = styled.div`
  width: 67px;
  height: 67px;
  background-color: ${(props) => props.color};
  border-radius: 16px;

  i {
    padding: 22px;
    color: #ffffff;
  }
`;

export const Box = styled.div`
  padding: 46px;
  padding-left: 34px;
  padding-right: 34px;
`;

export const TitleBox = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  color: #333333;

  margin-top: 35px;
`;

export const Description = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;

  margin-top: 24px;
`;

export const Button = styled.button`
  width: 116px;
  height: 42px;
  left: 198px;
  top: 1949px;
  background: #e0e0e0;
  border: none;
  border-radius: 12px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #828282;
  margin-top: 30px;
`;
