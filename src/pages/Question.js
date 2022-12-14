import React from "react";
import styled from "styled-components";
import { createSearchParams, useNavigate } from "react-router-dom";
import { ProgressBar, Button } from "react-bootstrap";
import { Questiondata } from "../assets/data/Questiondata";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  /* @media screen and (max-width: 767px) {
    height: 100%;
    overflow: hidden;
  } */
`;
const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  text-align: center;
  font-size: 40px;
  margin-bottom: 50px;
  @media screen and (max-width: 767px) {
    height: 50px;
    font-size: 30px;
  }
`;
const ButtonGroup = styled.div`
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  button:nth-child(1) {
    margin-right: 50px;
    @media screen and (max-width: 767px) {
      margin-right: 25px;
    }
  }
  .buttonQ:hover {
    background-color: #687d6c;
  }
  @media screen and (max-width: 767px) {
    width: 90%;
    height: 60%;
  }
  //PC만 호버
  @media (hover: hover) {
    .buttonQ:hover {
      background-color: #e0ddcf;
      color: black;
    }
  }
`;
const Question = () => {
  const navigate = useNavigate();
  const [questionNo, setQuestionNo] = useState(0);
  //바 채우기
  const bar = (questionNo / Questiondata.length) * 100;
  const [totalScore, setTotalScore] = useState([
    { id: "EI", score: 0 },
    { id: "SN", score: 0 },
    { id: "TF", score: 0 },
    { id: "JP", score: 0 },
  ]);
  const handleClickBtn = (no, type) => {
    const newScore = totalScore.map((a) =>
      a.id === type ? { id: a.id, score: a.score + no } : a
    );
    setTotalScore(newScore);
    //다음 문제로  문제수 증가
    if (Questiondata.length !== questionNo + 1) {
      setQuestionNo(questionNo + 1);
    } else {
      //mbti도출
      const mbti = newScore.reduce((acc, cur) => {
        //현재값의 id가 2보다 클경우 앞의 값, 2보다 작을경우 뒤의 값
        return (
          acc +
          (cur.score >= 2 ? cur.id.substring(0, 1) : cur.id.substring(1, 2))
        );
      }, "");
      // console.log(mbti);
      //결과 페이지로 이동
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({ mbti: mbti })}`,
      });
    }
  };

  return (
    <Wrapper>
      <ProgressBar variant="warning" now={bar} style={{ marginTop: "20px" }} />
      <ContentWrapper>
        <Title>{Questiondata[questionNo].title}</Title>
        <ButtonGroup>
          <Button
            className="buttonQ"
            onClick={() => {
              handleClickBtn(1, Questiondata[questionNo].type);
            }}
          >
            {Questiondata[questionNo].answera}
          </Button>
          <Button
            className="buttonQ"
            onClick={() => {
              handleClickBtn(0, Questiondata[questionNo].type);
            }}
          >
            {Questiondata[questionNo].answerb}
          </Button>
        </ButtonGroup>
      </ContentWrapper>
    </Wrapper>
  );
};
export default Question;
