import Home from "./pages/Home";
import Question from "./pages/Question";
import Result from "./pages/Result";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import GlobalStyle from "./component/GlobalStyle";
import React from "react";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes basename={process.env.PUBLIC_URL}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/question" element={<Question />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
    </>
  );
}

export default App;
