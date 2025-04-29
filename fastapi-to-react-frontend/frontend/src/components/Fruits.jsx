import React, { useState, useEffect } from "react";
import api from "../api";
import AddFruitForm from "./addFruitForm";

const FruitList = () => {
  const [fruits, setFruits] = useState([]);

  const fetchFruits = async () => {
    try {
      const response = await api.get("/fruits");
      setFruits(response.data.fruits);
    } catch (error) {
      console.error("Error fetching fruits:", error);
    }
  };

  const addFruit = async (fruitName) => {
    try {
      await api.post("/fruits", { name: fruitName });
      fetchFruits(); // Refresh the list after adding a fruit
    } catch (error) {
      console.error("Error adding fruit:", error);
    }
  };

    useEffect(() => {
        fetchFruits();
    }, []);
};
