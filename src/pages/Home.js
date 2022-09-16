import React from "react";
//css-in-js
import styled from "styled-components";
// import cat from "../assets/cat.jpg";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/cat/`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* @media screen and (max-width: 700px) {
    height: 100%;
  } */
`;
const Header = styled.div`
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderContent = styled.h1`
  @media screen and (max-width: 700px) {
    margin-top: 30px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .button:hover {
    background-color: #f7ecac;
    color: gray;
  }
`;
const Title = styled.div`
  margin-top: 30px;
  color: #c87271;
  font-size: 30px;
`;
const LogoImage = styled.div`
  margin: 50px 0;
  img {
    @media screen and (max-width: 700px) {
      width: 250px;
      height: 250px;
    }
  }
`;
const Desc = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Home = () => {
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
        <Title>나에게 맞는 애용이는?🐈</Title>
        <LogoImage>
          <img
            src={`${imgUrl}cat.jpg`}
            className="rounded-circle"
            alt="cat"
            width={350}
            height={350}
          />
        </LogoImage>
        <Desc>
          <h2>
            MBTI를 기반으로 하는 <br />
            나랑 잘 맞는 고양이 찾기
          </h2>
        </Desc>
        <Button
          className="button"
          onClick={() => {
            handleClickButton();
          }}
        >
          테스트 시작하기
        </Button>
      </Content>
    </Wrapper>
  );
};

export default Home;
