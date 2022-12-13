const express = require("express");
const bookRouter = express.Router();
const bookModel = require("../models/Books.model");

bookRouter.post("/", async (req, res) => {
  try {
    const book = await bookModel.create(req.body);
    return res.status(200).send(book);
  } catch (er) {
    return res.status(500).send({ message: er.message });
  }
});

bookRouter.get("/", async (req, res) => {
  try {
    const book = await bookModel.find().populate("authorId");
    return res.status(200).send(book);
  } catch (er) {
    return res.status(500).send({ message: er.message });
  }
});

bookRouter.get("/book/:id", async (req, res) => {
    try {
      const book = await bookModel.find(req.params.id);
      return res.status(200).send(book);
    } catch (er) {
      return res.status(500).send({ message: er.message });
    }
  });

  bookRouter.patch('/edit/:id',async(req,res)=>{
    try{
            const book= await bookModel.findByIdAndUpdate(req.params.id,req.body);
            return res.status(200).send(book);
    }catch(er){
        return res.status(500).send({message:er.message})
    }
  })

  bookRouter.delete('/delete/:id',async(req,res)=>{
    try{
       const book= await bookModel.findByIdAndDelete(req.params.id);
       return res.status(200).send(book);
    }catch(er){
        return res.status(500).send({message:er.message});
    }
  })

module.exports  = bookRouter;
