import express, { Request, Response } from 'express';
const Product=require("./src/models/products")
import mongoose, { Schema, Document } from 'mongoose';
const app = express();
mongoose.connect("mongodb://localhost:27017/shop").then(()=>{
  console.log("Connection To Mongo")
}).catch(()=>{
  console.log("Error DB Connection")
})
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express + TypeScript + mongo!');
});

app.post('/Addproduct', (req: Request, res: Response) => {
  var Newproduct = new Product()
  const { name, class:ClassP, pr, img } = req.body;
  if (
    !name ||
    !ClassP ||
    !pr ||
    !img 

  ) {
    res.send("error input");
  }else{
    Newproduct.name = name;
    Newproduct.class = ClassP;
    Newproduct.pr = pr;
    Newproduct.img = img;
    Newproduct.save().then(() => {
      res.send('products');
    })
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
