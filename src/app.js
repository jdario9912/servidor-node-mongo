import express from "express";

const app = express();

app.get("/", (req, res) => res.json("Hola Node con Docker"));

export default app;
