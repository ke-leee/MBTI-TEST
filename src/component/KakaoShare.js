/* eslint-disable */
import React from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
const { Kakao } = window;

const KakaoShare = () => {
  const url = "https://meowmeowmbti.netlify.app/";
  const resulturl = window.location.href;
  //   console.log(resulturl);

  //컴포넌트를 접근한 시점에 권한 요청 필요
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("1a3e5408d23acc7cb2fd5b9dfed219bb");
    console.log(Kakao.isInitialized());
  }, []);

  const ShareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "예비집사 판별기 결과",
        description: "예비 집사님이 ",
        imageUrl:
          "https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg",
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          androidExecutionParams: "test",
        },
      },

      buttons: [
        {
          title: "나도 테스트 하러가기",
          link: {
            mobileWebUrl: url,
            WebUrl: url,
          },
        },
      ],
    });
  };
  return (
    <Button style={{ fontFamily: "Pretendard" }}>카카오톡 공유하기</Button>
  );
};

export default KakaoShare;
