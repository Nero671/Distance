import './App.css';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {HeaderContainer} from "./Components/Header/HeaderContainer";

import React from "react";
import {Login} from "./Components/Login/Login";
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
