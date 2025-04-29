import axios from "axios";

const baseURL = "http://localhost:8000"; // Adjust the base URL as needed

const api = axios.create({
  baseURL: baseURL,
});
