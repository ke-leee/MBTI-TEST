import React from "react";
//css-in-js
import styled from "styled-components";
// import cat from "../assets/cat.jpg";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/cat/`;

const Wrapper = styled.div`
  background-color: lightgray;
  height: 100vh;
  width: 100%;
  font-family: "Pretendard";
`;
const Header = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  font-size: 30px;
  margin-top: 40px;
`;
const LogoImage = styled.div`
  margin-top: 10px;
`;
const Desc = styled.div`
  font-size: 20px;
  margin-top: 20px;
`;

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate("/question");
  };

  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Content>
        <Title> 나에게 맞는 주인님은?</Title>
        <LogoImage>
          <img
            // src={cat}
            src={`${imgUrl}cat.jpg`}
            className="rounded-circle"
            alt="cat"
            width={350}
            height={350}
          />
        </LogoImage>
        <Desc>MBTI를 기반으로 하는 나랑 잘 맞는 고양이 찾기</Desc>
        <Button
          style={{ fontFamily: "Pretendard" }}
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
