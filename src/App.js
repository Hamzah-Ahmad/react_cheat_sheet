import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import BasicsComponent from "./components/BasicsComponent";
import RouterComponent from "./components/RouterComponent";
import ContextComponent from "./components/ContextComponent";
import ReduxComponent from "./components/ReduxComponent";
import GraphqlComponent from "./components/GraphqlComponent";

function App() {
  const style = {
    marginRight: 15,
    textDecoration: "underline",
    fontSize: 20,
  };
  return (
    <div className="App">
      <Link to="/" style={style}>
        Basics
      </Link>
      <Link to="/routerComponent" style={style}>
        React Router
      </Link>
      <Link to="/contextComponent" style={style}>
        React Context
      </Link>
      <Link to="/reduxComponent" style={style}>
        React Redux
      </Link>
      <Link to="/graphqlComponent" style={style}>
        GraphQL Apollo
      </Link>
      <Route exact path="/" component={BasicsComponent} />
      <Route path="/routerComponent" component={RouterComponent} />
      <Route path="/contextComponent" component={ContextComponent} />
      <Route path="/reduxComponent" component={ReduxComponent} />
      <Route path="/graphqlComponent" component={GraphqlComponent} />
    </div>
  );
}

export default App;
