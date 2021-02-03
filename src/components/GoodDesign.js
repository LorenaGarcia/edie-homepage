import React from "react";
import styled from "styled-components";
import ImgSmart from "../images/smarthome.jpg";
import ImgOnboard from "../images/onboard.png";
import ImgBooking from "../images/booking.png";
import ImgJuice from "../images/juice-product.png";

const GoodDesign = () => {
  return (
    <Container>
      <ContainerImage>
        <Title>Good design means good business</Title>
        <Grid>
          <Smart>
            <Image src={ImgSmart} />
            <TitleBox>Full stack application</TitleBox>
            <SubTitleBox>Smart home dashboard</SubTitleBox>
          </Smart>

          <Onboard>
            <Image src={ImgOnboard} />
            <TitleBox>Full stack application</TitleBox>
            <SubTitleBox>Smart home dashboard</SubTitleBox>
          </Onboard>

          <Booking>
            <Image src={ImgBooking} />
            <TitleBox>Full stack application</TitleBox>
            <SubTitleBox>Smart home dashboard</SubTitleBox>
          </Booking>

          <Juice>
            <Image src={ImgJuice} />
            <TitleBox>Full stack application</TitleBox>
            <SubTitleBox>Smart home dashboard</SubTitleBox>
          </Juice>

          <SeeMore>See more &#8594;</SeeMore>
        </Grid>
      </ContainerImage>
    </Container>
  );
};

export default GoodDesign;

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
  grid-gap: 20px;
  grid-template-rows: 150px auto 150px 150px auto 150px;

  @media (max-width: 480px) {
    grid-gap: 30px;
    grid-template-columns: repeat(1, 100%);
    grid-template-rows: auto;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    grid-gap: 15px;
    grid-template-columns: repeat(2, 50%);
  }
`;

export const Smart = styled.div`
  width: 100%;
  grid-column: 1 / 2;
  grid-row: 2 / 4;

  background: #ffffff;
  cursor: grab;

  @media (max-width: 480px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`;

export const Onboard = styled.div`
  width: 100%;
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  background: #ffffff;
  cursor: grab;

  @media (max-width: 480px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
`;

export const Booking = styled.div`
  width: 100%;
  grid-column: 1 / 2;
  grid-row: 5 / 7;
  background: #ffffff;
  cursor: grab;

  @media (max-width: 480px) {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
`;

export const Juice = styled.div`
  width: 100%;
  grid-column: 2 / 3;
  grid-row: 4 / 6;
  background: #ffffff;
  cursor: grab;

  @media (max-width: 480px) {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
  }
`;

export const SeeMore = styled.div`
  width: 100%;
  grid-column: 2 / 3;
  grid-row: 6 / 7;
  background: #ffffff;
  text-align: right;
  display: flex;
  flex-direction: column-reverse;
  color: #2d9cdb;
  font-size: 24px;
  font-family: Poppins;

  @media (max-width: 480px) {
    grid-column: 1 / 1;
    grid-row: 5 / 6;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 500px;
  border-radius: 12px;
`;

export const TitleBox = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  color: #828282;
  margin-bottom: 0px;
`;

export const SubTitleBox = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #333333;
  margin-bottom: 0px;
  margin-top: 0px;
`;
