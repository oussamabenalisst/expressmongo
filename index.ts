import express, { Request, Response } from 'express';
import mongoose, { Schema, Document } from 'mongoose';
const app = express();
mongoose.connect("mongodb://localhost:27017/shop").then(()=>{
  console.log("Error DB Connection")
})
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express + TypeScript + mongo!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
