import React from "react";
//css-in-js
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/cat/`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const Header = styled.div`
  margin-top: 20px;
`;
const HeaderContent = styled.h1``;
const Content = styled.div`
  margin: 40px 0;
`;
const Title = styled.div`
  color: #c87271;
  font-size: 40px;
  @media screen and (max-width: 767px) {
    text-align: center;
    font-size: 20px;
  }
`;
const LogoImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
  img {
    width: 70%;
    height: 70%;
    @media screen and (max-width: 767px) {
      width: 50%;
      height: 50%;
    }
  }
`;
const Desc = styled.div``;
const P = styled.p`
  margin: 0;
  text-align: center;
  color: #667b69;
  font-family: "GangwonEduAll";
  font-size: 30px;
  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
`;

const Footer = styled.div`
  margin-bottom: 20px;
  .button:hover {
    background-color: #f7ecac;
    color: gray;
  }
`;

const Home2 = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate("/question");
  };

  return (
    <Wrapper>
      <Header>
        <HeaderContent>예비집사 판별기</HeaderContent>
      </Header>
      <Content>
        <Title>나에게 맞는 애용이는?</Title>
        <LogoImage>
          <img
            src={`${imgUrl}meow.png`}
            // className="rounded-circle"
            alt="cat"
            // width={350}
            // height={350}
          />
        </LogoImage>
        <Desc>
          <P>
            MBTI를 기반으로 하는 <br />
            나랑 잘 맞는 고양이 찾기
          </P>
        </Desc>
      </Content>
      <Footer>
        <Button
          className="button home"
          onClick={() => {
            handleClickButton();
          }}
        >
          테스트 시작하기
        </Button>
      </Footer>
    </Wrapper>
  );
};

export default Home2;
