import express, { Request, Response } from "express";
const Product = require("./src/models/products");
import mongoose, { Schema, Document } from "mongoose";
const app = express();
app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/shop")
  .then(() => {
    console.log("Connection To Mongo");
  })
  .catch(() => {
    console.log("Error DB Connection");
  });
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Express + TypeScript + mongo!");
});

app.get("/product/", async (req: Request, res: Response) => {
  try {
    const prd = await Product.find();
    res.json(prd);
  } catch (err) {
    res.send(err);
  }
});

app.put("/product/:name", async (req: Request, res: Response) => {
  if (
    !req.params.name ||
    req.params.name == "" ||
    req.params.name.length < 3 ||
    req.params.name.length > 50
  ) {
    res.status(403).send("name not valide");
    return;
  }
  const name = req.params.name;
  try {
    const product = await Product.find({ name: name });
    if (product.length === 0) {
      res.status(404).send("Product not found");
      return;
    }
    if (!req.body) {
      res.status(404).send("information not found");
      return;
    }
    const { class: ClassP, pr, img } = req.body;
    await Product.updateOne({ name: name }, { pr: pr, class: ClassP, img: img })
      .then(() => {
        res.status(200).send("Product found,is Good");
      })
      .catch(() => {
        res.status(404).send("no update");
      });
  } catch (err) {
    res.status(500).send("Error fetching product");
  }
});

app.get("/product/:name", async (req: Request, res: Response) => {
  try {
    const name = req.params.name;
    if (name == "" || name.length < 3 || name.length > 50) {
      res.status(403).send("name not valide");
      return;
    }
    const prd = await Product.find({ name: name });
    res.json(prd);
  } catch (err) {
    res.send(err);
  }
});

app.delete("/product/:name", async (req: Request, res: Response) => {
  if (!req.params.name) {
    res.status(403).send("name vide");
    return;
  }
  const name = req.params.name;
  if (name == "" || name.length < 3 || name.length > 50) {
    res.status(403).send("name not valide");
    return;
  }
  await Product.deleteMany({ name: name })
    .then(() => {
      res.status(200).send("Good delete");
    })
    .catch(() => {
      res.status(403).send("error delete");
    });
});

app.post("/Addproduct", (req: Request, res: Response) => {
  try {
    if (!req.body) {
      res.send("error req.body");
    }
    var Newproduct = new Product();
    const { name: nameP, class: ClassP, pr, img } = req.body;
    if (!nameP || !ClassP || !pr || !img) {
      res.send("error input");
      return;
    }
    Newproduct.name = nameP;
    Newproduct.class = ClassP;
    Newproduct.pr = pr;
    Newproduct.img = img;
    Newproduct.save().then(() => {
      res.send("product add");
    });
  } catch {
    res.send("Error of catch");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
