import React from "react";
import styled from "styled-components";
import TeamImage1 from "../images/person3.png";
import TeamImage2 from "../images/person1.png";
import TeamImage3 from "../images/person2.png";
import TeamImage4 from "../images/person4.png";

const GoodDesign = () => {
  return (
    <Container>
      <ContainerImage>
        <Grid>
          <Team>
            <TitleRed>Meet the team</TitleRed>
            <SubTitleBox>
              We are chilled
              <br /> and a laidback
              <br /> team
            </SubTitleBox>
            <SubTitleBoxTwo>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.
            </SubTitleBoxTwo>
          </Team>

          <Team1>
            <Image src={TeamImage1} />
          </Team1>

          <Team2>
            <Image src={TeamImage2} />
          </Team2>

          <Team3>
            <Image src={TeamImage3} />
          </Team3>

          <TeamFooter>
            <TextTeamDescription>
              “Fast and outstanding resutls. Edie understands
              <br /> their customer’s needs. They have a young and
              <br /> talented team.”
            </TextTeamDescription>

            <ContainerGatsby>
              <ImageGatsby src={TeamImage4} />
              <ContainerTextGatsby>
                <TitleGatsby>Carlos Tran</TitleGatsby>
                <SubtitleGatsby>The Decorate Gatsby</SubtitleGatsby>
              </ContainerTextGatsby>
            </ContainerGatsby>
          </TeamFooter>
        </Grid>
      </ContainerImage>
    </Container>
  );
};

export default GoodDesign;

export const Container = styled.div`
  margin-left: 100px;
  margin-top: 100px;
  margin-right: 100px;

  @media (max-width: 480px) {
    margin-left: 0px;
    margin-top: 60px;
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

export const TitleRed = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 27px;
  color: #eb5757;
  margin-bottom: 7px;

  @media (max-width: 480px) {
    width: 259px;
    font-size: 18px;
    line-height: 36px;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    width: 259px;
    font-size: 24px;
    line-height: 36px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-rows: 130px 130px 130px 130px 130px;
  grid-template-columns: auto 280px 280px;

  @media (max-width: 480px) {
    grid-gap: 10px;
    grid-template-columns: 50% 50%;
    grid-template-rows: 330px 100px 100px 100px 100px;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    grid-gap: 10px;
    grid-template-columns: 50% 50%;
    grid-template-rows: 330px 200px 200px 200px 200px;
  }
`;

export const Team = styled.div`
  width: 100%;
  grid-column: 1 / 2;
  grid-row: 2 / 4;

  background: #ffffff;

  @media (max-width: 480px) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
`;

export const Team1 = styled.div`
  width: 100%;
  grid-column: 2 / 3;
  grid-row: 2 / 4;
  background: #ffffff;
  text-align: right;

  @media (max-width: 480px) {
    grid-column: 1 / 2;
    grid-row: 3 / 5;
    text-align: center;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    grid-column: 1 / 2;
    grid-row: 3 / 5;
    text-align: center;
  }
`;

export const Team2 = styled.div`
  width: 100%;
  grid-column: 3 / 4;
  grid-row: 1 / 3;
  background: #ffffff;
  text-align: right;

  @media (max-width: 480px) {
    grid-column: 2 / 3;
    grid-row: 2 / 4;
    text-align: center;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    grid-column: 2 / 3;
    grid-row: 2 / 4;
    text-align: center;
  }
`;

export const Team3 = styled.div`
  width: 100%;
  grid-column: 3 / 4;
  grid-row: 3 / 4;
  background: #ffffff;
  text-align: right;

  @media (max-width: 480px) {
    grid-column: 2 / 3;
    grid-row: 4 / 6;
    text-align: center;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    grid-column: 2 / 3;
    grid-row: 4 / 6;
    text-align: center;
  }
`;

export const TeamFooter = styled.div`
  width: 100%;
  grid-column: 1 / 4;
  grid-row: 6 / 7;
  background: #ffffff;

  @media (max-width: 480px) {
    grid-column: 1 / 3;
    grid-row: 6 / 7;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    grid-column: 1 / 3;
    grid-row: 6 / 7;
  }
`;

export const Image = styled.img`
  width: 270px;
  height: 270px;
  border-radius: 12px;

  @media (max-width: 480px) {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    width: 100%;
    height: 100%;
  }
`;

export const ImageGatsby = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 12px;
`;

export const SubTitleBox = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #333333;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const SubTitleBoxTwo = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
  margin-top: 14px;
`;

export const TextTeamDescription = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 54px;
  color: #333333;

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const ContainerGatsby = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ContainerTextGatsby = styled.div`
  margin-left: 30px;
`;

export const TitleGatsby = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #333333;
`;

export const SubtitleGatsby = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #828282;
`;
