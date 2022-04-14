import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          Hello! what word do you want to look up?
        </header>
      </div>
      <main>
        <Dictionary />
      </main>
    </div>
  );
}

export default App;
