import logo from './logo.svg';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";

const App = ({ posts, messages, dialog, friend }) => {



  return (
    <div className="app-wrapper">
      <Header/>
      <Main
          posts={posts}
          messages={messages}
          dialog={dialog}
          friend={friend}
      />
    </div>
  );
}

export default App;
