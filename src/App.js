/* eslint-disable */
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Question from "./pages/Question";
import Result from "./pages/Result";
import Result2 from "./pages/Result2";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./component/GlobalStyle";
import React from "react";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes basename={process.env.PUBLIC_URL}>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/" element={<Home2 />}></Route>
        <Route path="/question" element={<Question />}></Route>
        {/* <Route path="/result" element={<Result />}></Route> */}
        <Route path="/result" element={<Result2 />}></Route>
      </Routes>
    </>
  );
}

export default App;
