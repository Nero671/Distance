import './App.css';
import {HeaderContainer} from "./Components/Header/HeaderContainer";
import React from "react";
import {MainContainer} from "./Components/Main/MainContainer";

const App = () => {
  return (
      <div className="app-wrapper">
          <HeaderContainer />
          <MainContainer />
      </div>
  );
}

export default App;
