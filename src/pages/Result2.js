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
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-height: 650px) {
    height: 100%;
  }
`;
const Header = styled.div`
  margin-top: 30px;
`;
const HeaderContent = styled.h1`
  @media screen and (max-width: 767px) {
    font-size: 30px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.div`
  img {
    @media screen and (max-width: 1024px) {
      margin: 40px 0;
      width: 300px;
      height: 300px;
    }
    @media screen and (max-width: 767px) {
      width: 200px;
      height: 200px;
    }
  }
`;
const Desc = styled.div`
  font-size: 20px;
  margin: 20px 0;
  text-align: center;
  span {
    color: #667b69;
    font-size: 40px;
    font-family: "GangwonEduAll";
    @media screen and (max-width: 700px) {
      font-size: 30px;
    }
  }
`;
const Detail = styled.div`
  background-color: #667b69;
  width: 60%;
  border-radius: 20px;
  opacity: 0.8;
  @media screen and (max-width: 700px) {
    width: 90%;
  }
  p {
    padding: 10px 40px;
    margin: 0;
    font-size: 20px;
    color: white;
    @media screen and (max-width: 767px) {
      font-size: 15px;
      padding: 10px;
    }
  }
`;
const BtnGroup = styled.div`
  margin: 30px 0;
  button:nth-child(1) {
    margin-right: 10px;
  }
  .button:hover {
    background-color: #f7ecac;
    color: gray;
  }
  @media screen and (max-width: 767px) {
  }
`;

const Result2 = () => {
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
          예비 집사님과 찰떡인 고양이는
          <br />
          <span>{resultData.name}</span>
        </Desc>
        <Detail>
          <p>{resultData.desc}</p>
        </Detail>
      </Content>
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
    </Wrapper>
  );
};

export default Result2;
