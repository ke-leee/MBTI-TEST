import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
    background-color: #D2E2E2;
    /* color:yellow; */
}
h1{
    color: #667B69;
    font-family: "GangwonEduAll";
    font-size: 60px;
    margin: 0;
 @media screen and (max-width: 767px) {
   font-size:45px
  } 
}

.button{
    font-family: "GangwonEduAll";
    background-color: #687d6c;
    border: none;
    padding-top: 10px;
}
.button.home{
    @media screen and (max-width: 767px) {
      width: 250px;
    }
}

.buttonQ{
    font-family: "GangwonEduAll";
    background-color: #687d6c;
    border: none;
    width: 100%; 
    height: 60%; 
    font-size: 23px;
    /* padding: 0 20px; */
    @media screen and (max-width: 767px) {
        font-size:15px;
    }

}

`;

export default GlobalStyle;
