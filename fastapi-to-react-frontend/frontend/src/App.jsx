import FruitList from "./components/Fruits";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <header>
          <h1>Fruit Management App</h1>
        </header>
        <main>
          <h1>Fruit List</h1>
          <FruitList />
        </main>
      </div>
    </>
  );
}

export default App;
