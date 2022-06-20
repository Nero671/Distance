import './App.css';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {HeaderContainer} from "./Components/Header/HeaderContainer";

import React from "react";
import {Login} from "./Components/Login/Login";

const App = () => {
  return (
    <div className="app-wrapper">
        <HeaderContainer />
        <Main />
    </div>
  );
}

export default App;
