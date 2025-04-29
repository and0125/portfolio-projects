import React, { useState } from "react";
import FruitList from "./components/Fruits";
import "./App.css";

function App() {
  return (
    <>
      <h1>Fruit Management App</h1>
      <main>
        <div className="card">
          <div className="card-body">
            <FruitList />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
