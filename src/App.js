import "./App.css";
import Header from "./components/Header";
import Newsfeed from "./components/Newsfeed";
import Stats from "./components/Stats";
import Testonboarding from "./components/Testonboarding";

function App() {
  return (
    <div className="App">
      <Testonboarding />
      {/*Header */}
      <div className="app__header">
        <Header />
      </div>
      {/*Body */}
      <div className="app__body">
        <div className="app__container">
          <Newsfeed />
          <Stats />
        </div>
      </div>
    </div>
  );
}

export default App;
