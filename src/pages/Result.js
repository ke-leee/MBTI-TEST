import React from "react";
//css-in-js
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { useSearchParams } from "react-router-dom";
import { Resultdata } from "../assets/data/Resultdata";
import { useState } from "react";
import { useEffect } from "react";

const Wrapper = styled.div`
  background-color: lightgreen;
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

const Detail = styled.div`
  background-color: pink;
  p {
    font-size: 30px;
  }
`;
const Result = () => {
  // const [resultdata] = useState(Resultdata);
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti"); //가져오려는 key값 입력
  //mbti 결과값
  const [resultData, setResultData] = useState("");

  useEffect(() => {
    const result = Resultdata.find((a) => a.best === mbti);
    setResultData(result);
    console.log(result);
  }, [mbti]);

  return (
    <Wrapper>
      <Header>예비집사 판별기</Header>
      <Content>
        <Title> 결과 보기</Title>
        <LogoImage>
          <img
            src={resultData.image}
            className="rounded-circle"
            alt="logo"
            width={350}
            height={350}
          />
        </LogoImage>
        <Desc>{resultData.name}</Desc>
        <Detail>
          <p>{resultData.desc}</p>
        </Detail>
        <Button style={{ fontFamily: "Pretendard", color: "red" }}>
          테스트 다시하기
        </Button>
      </Content>
    </Wrapper>
  );
};

export default Result;
