import './App.css';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";

const App = ({
                    posts,
                    messages,
                    dialog,
                    friend,
                    store
}) => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Main
          posts={posts}
          messages={messages}
          dialog={dialog}
          friend={friend}
          store={store}
      />
    </div>
  );
}

export default App;
