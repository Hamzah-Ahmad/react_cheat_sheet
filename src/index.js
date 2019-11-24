import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <BrowserRouter>
    <Container>
      <App />
    </Container>
  </BrowserRouter>,
  document.getElementById("root")
);
