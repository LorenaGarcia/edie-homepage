import React from "react";
import styled from "styled-components";
import image1 from "../images/heroImage.jpg";

const Introducction = () => {
  return (
    <Container>
      <ContainerImage>
        <DivText>
          <Title>UnhaTitlepy with your website?</Title>
          <SubTitle>
            We create beautiful <br />
            and fast web services
          </SubTitle>
        </DivText>
        <Image src={image1} />
        <DivStory>
          <SubTitle>
            Story, emotion <br />
            and purpose
          </SubTitle>
          <SubTitleTwo>
            We help transform your ideas into real world applications that will
            outperform your toughest competition and help you achieve your
            strategic goals in short period of time.
          </SubTitleTwo>
          <div>
            <TextContact>Want us to contact you?</TextContact>
            <Input type="text" placeholder="Email" />
            <Button>Join</Button>
          </div>
        </DivStory>
      </ContainerImage>
    </Container>
  );
};

export default Introducction;

export const Container = styled.div`
  width: 100%;
`;

export const ContainerImage = styled.div`
  padding-right: 30px;
  padding-left: 30px;
`;

export const Image = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  display: block;
  border-radius: 18px;

  @media (max-width: 480px) {
    height: 145px;
  }
`;

export const DivText = styled.div`
  width: 80%;
  margin-left: 20%;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    margin-left: 0px;
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    margin-left: 0px;
    width: 100%;
  }
`;

export const DivStory = styled.div`
  width: 366px;
  margin-left: 20%;
  margin-top: 42px;

  @media (max-width: 480px) {
    margin-left: 0px;
    width: 100%;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    margin-left: 0px;
    width: 100%;
  }
`;

export const Title = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #2d9cdb;
  margin: 0px;

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

export const SubTitle = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 72px;
  color: #333333;
  margin: 0px;

  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 36px;
  }
`;

export const SubTitleTwo = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  color: #4f4f4f;
  margin-top: 42px;
  margin-bottom: 42px;

  @media (max-width: 480px) {
    font-size: 12px;
    line-height: 18px;
  }
`;

export const TextContact = styled.p`
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #828282;
  margin-bottom: 9px;

  @media (max-width: 480px) {
    font-size: 10px;
    line-height: 15px;
  }
`;

export const Input = styled.input`
  width: 350px;
  height: 57px;
  padding-left: 10px;
  background: #f2f2f2;
  border-radius: 12px;
  border: 0px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 500px;
  font-size: 18px;
  line-height: 27px;
  color: #bdbdbd;

  @media (max-width: 480px) {
    width: 291px;
    font-size: 14px;
    line-height: 21px;
  }

  ::placeholder {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500px;
    font-size: 18px;
    line-height: 27px;
    color: #bdbdbd;
  }
`;

export const Button = styled.button`
  margin-left: -99px;
  width: 94px;
  height: 49px;

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
