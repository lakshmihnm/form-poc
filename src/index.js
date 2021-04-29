import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import FormContainer from "./components/organisms/container/formContainer";
import App from "./App";

const Div = styled.div`
  position: absolute;
  top: 50%;
  left: 35%;
  transform: translate(0, -50%);
  // border: 5px solid #FFFF00;
  padding: 10px;
`;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
