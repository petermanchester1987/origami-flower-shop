import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

const PORT = NODE_ENV || 5000;

app.listen(5000, () => {
  console.log(`Server started at Port: ${PORT}`);
});
