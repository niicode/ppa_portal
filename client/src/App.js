import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

//Component import
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
// import Register from "./Components/Register";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/login" component={Login} exact />
      </Switch>
      {/* <Login />
      <Register /> */}
    </div>
  );
}

export default App;
