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
    font-size: 50px;

}
h2{
    margin: 0 30px;
    color: #667B69;
    font-family: "GangwonEduAll";
    font-size: 20px;
}
.button{
    font-family: "GangwonEduAll";
    background-color: #687d6c;
    border: none;
    padding-top: 10px;
}
.buttonQ{
    font-family: "GangwonEduAll";
    background-color: #687d6c;
    border: none;
    width: 40%;
    height: 40%;
    font-size: 23px;
    padding: 0 20px;

}
@media only screen and (max-width : 700px) {
    .buttonQ{
       width:100%;
       height:50%; 
       font-size:15px;
    }
}
`;

export default GlobalStyle;
