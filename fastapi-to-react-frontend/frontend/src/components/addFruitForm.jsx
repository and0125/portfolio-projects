import React, { useState } from "react";

const AddFruitForm = ({ onAddFruit }) => {
  const [fruitName, setFruitName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (fruitName.trim()) {
      addFruit(fruitName);
      setFruitName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={fruitName}
        onChange={(e) => setFruitName(e.target.value)}
        placeholder="Enter fruit name"
      />
      <button type="submit">Add Fruit</button>
    </form>
  );
};
