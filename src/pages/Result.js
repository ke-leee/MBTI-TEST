import React from "react";
//css-in-js
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Resultdata } from "../assets/data/Resultdata";
import { useState } from "react";
import { useEffect } from "react";
import KakaoShare from "../component/KakaoShare";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;
const Header = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
const HeaderContent = styled.h1`
  @media screen and (max-width: 700px) {
    font-size: 30px;
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
  font-size: 30px;
  margin-top: 40px;
`;
const LogoImage = styled.div`
  margin-top: 10px;
`;
const Desc = styled.div`
  font-size: 20px;
  margin: 30px 15px;
  span {
    color: #667b69;
    font-size: 40px;
    font-family: "GangwonEduAll";
    @media screen and (max-width: 700px) {
      font-size: 20px;
    }
  }
`;

const Detail = styled.div`
  background-color: #667b69;
  width: 70%;
  border-radius: 20px;
  opacity: 0.8;
  @media screen and (max-width: 700px) {
    width: 90%;
  }
  p {
    margin: 30px 70px;
    font-size: 30px;
    color: white;
    @media screen and (max-width: 700px) {
      font-size: 20px;
      margin: 20px;
    }
  }
`;
const BtnGroup = styled.div`
  margin-top: 30px;
  button:nth-child(1) {
    margin-right: 10px;
  }
`;

const Result = () => {
  // const [resultdata] = useState(Resultdata);
  const [searchParams] = useSearchParams();
  const mbti = searchParams.get("mbti"); //가져오려는 key값 입력
  //mbti 결과값
  const [resultData, setResultData] = useState("");

  const navigate = useNavigate();

  const handleClickButton = () => {
    navigate("/");
  };

  useEffect(() => {
    const result = Resultdata.find((a) => a.best === mbti);
    setResultData(result);
    // console.log(result);
  }, [mbti]);

  return (
    <Wrapper>
      <Header>
        <HeaderContent>😺예비집사 판별기 결과😺</HeaderContent>
      </Header>
      <Content>
        <Title> 두근두근 </Title>
        <LogoImage>
          <img
            src={resultData.image}
            className="rounded-circle"
            alt="logo"
            width={350}
            height={350}
          />
        </LogoImage>
        <Desc>
          예비 집사님과 찰떡인 고양이는 <span>{resultData.name}</span> 입니다
        </Desc>
        <Detail>
          <p>{resultData.desc}</p>
        </Detail>
        <BtnGroup>
          <Button
            className="button"
            onClick={() => {
              handleClickButton();
            }}
          >
            테스트 다시하기
          </Button>
          <KakaoShare data={resultData} />
        </BtnGroup>
      </Content>
    </Wrapper>
  );
};

export default Result;
