import React from "react";
//css-in-js
import styled from "styled-components";
import cat from "../assets/cat.jpg";
import Button from "react-bootstrap/Button";

const Wrapper = styled.div`
  background-color: pink;
  height: 100vh;
  width: 100vh;
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
  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Content>
        <Title> 나에게 맞는 주인님은?</Title>
        <LogoImage>
          <img
            src={cat}
            className="rounded-circle"
            alt="logo"
            width={350}
            height={350}
          />
        </LogoImage>
        <Desc>MBTI를 기반으로 하는 나랑 잘 맞는 고양이 찾기</Desc>
        <Button>테스트 시작하기</Button>
      </Content>
    </Wrapper>
  );
};

export default Home;
