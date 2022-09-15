import React from "react";
import styled from "styled-components";
import { createSearchParams, useNavigate } from "react-router-dom";
import { ProgressBar, Button } from "react-bootstrap";
import { Questiondata } from "../assets/data/Questiondata";
import { useState } from "react";

const Wrapper = styled.div`
  background-color: lightgray;
  height: 100vh;
  width: 100%;
  font-family: "Pretendard";
`;
const Title = styled.div`
  font-size: 30px;
  text-align: center;
  margin-top: 40px;
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  button {
    width: 40%;
    min-height: 200px;
    font-size: 15px;
    font-family: "Pretendard";
    background-color: lightskyblue;
  }
  button:nth-child(1) {
    margin-right: 20px;
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
      console.log(mbti);
      //결과 페이지로 이동
      navigate({
        pathname: "/result",
        search: `?${createSearchParams({ mbti: mbti })}`,
      });
    }

    // if (type === "EI") {
    //   //기존 스코어에 더할 값을 계산(기존값 + 배점)
    //   const addScore = totalScore[0].score + no;
    //   //새로운 객체 생성
    //   const newObject = { id: "EI", score: addScore };
    //   //splice를 통해 새로운 객체를 해당객체 자리에 넣어줌
    //   totalScore.splice(0, 1, newObject);
    // } else if (type === "SN") {
    //   const addScore = totalScore[0].score + no;
    //   const newObject = { id: "SN", score: addScore };
    //   totalScore.splice(1, 1, newObject);
    // } else if (type === "TF") {
    //   const addScore = totalScore[1].score + no;
    //   const newObject = { id: "TF", score: addScore };
    //   totalScore.splice(2, 1, newObject);
    // } else {
    //   const addScore = totalScore[2].score + no;
    //   const newObject = { id: "JP", score: addScore };
    //   totalScore.splice(3, 1, newObject);
    // }
  };

  return (
    <Wrapper>
      <ProgressBar
        striped
        variant="danger"
        now={bar}
        style={{ marginTop: "20px" }}
      />
      <Title>{Questiondata[questionNo].title}</Title>
      <ButtonGroup>
        <Button
          onClick={() => {
            handleClickBtn(1, Questiondata[questionNo].type);
          }}
        >
          {Questiondata[questionNo].answera}
        </Button>
        <Button
          onClick={() => {
            handleClickBtn(0, Questiondata[questionNo].type);
          }}
        >
          {Questiondata[questionNo].answerb}
        </Button>
      </ButtonGroup>
    </Wrapper>
  );
};
export default Question;
