import express, { Request, Response } from "express";
import mongoose from "mongoose";
const app = express();

const db = mongoose.connect(
  "mongodb+srv://financialtracker:OLrhgEtrxyuUsVsY@cluster0.fo5vnzz.mongodb.net/?retryWrites=true&w=majority"
);

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

app.listen(5000);
