/* eslint-disable */
import React from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
const { Kakao } = window;

const imgUrl = `${process.env.PUBLIC_URL}/assets/images/cat/`;

const KakaoShare = (props) => {
  const url = "https://meowmeowmbti.netlify.app/";
  const resultUrl = window.location.href;
  //   console.log(resulturl);

  //컴포넌트를 접근한 시점에 권한 요청 필요
  useEffect(() => {
    Kakao.cleanup();
    Kakao.init("1a3e5408d23acc7cb2fd5b9dfed219bb");
  }, []);

  const ShareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "나의 애용이😼",
        // description: `예비 집사님이 고양이를 키운다면 가장 잘맞는 고양이는 ${props.data.name}입니다.`,
        description: `나와 가장 잘 맞는 고양이는 ${props.data.name} 입니다.`,
        // imageUrl: url + props.data.image,
        imageUrl: url + `${imgUrl}meow.png`,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },
      buttons: [
        {
          title: "테스트 하러가기",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };
  return (
    <Button className="button" onClick={ShareKakao}>
      카카오톡 공유하기
    </Button>
  );
};

export default KakaoShare;
