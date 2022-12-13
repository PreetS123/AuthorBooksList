const { Router } = require("express");
const AuthorRouter = Router();
const authorModel = require("../models/Author.model");

AuthorRouter.get("/", async (req, res) => {
  try {
    const author = await authorModel.find();
    return res.status(200).send(author);
  } catch (er) {
    return res.status(500).send({ message: er.message });
  }
});

AuthorRouter.get("/:id", async (req, res) => {
  try {
    const author = await authorModel.find(req.params.id);
    return res.status(200).send(author);
  } catch (er) {
    return res.status(500).send({ message: er.message });
  }
});

AuthorRouter.post("/", async (req, res) => {
  try {
    const author = await authorModel.create(req.body);
    return res.status(200).send(author);
  } catch (er) {
    return res.status(500).send({ message: er.message });
  }
});


 AuthorRouter.patch('/edit/:id',async(req,res)=>{
  try{
         const author=await  authorModel.findByIdAndUpdate(req.params.id,req.body);
         author.save();
         return res.status(200).send(author);
  }catch(er){
      return res.status(500).send({message:er.message});
  }
 })

 AuthorRouter.delete('/delete/:id',async(req,res)=>{
  const authorId=req.params.id;
  try{
      const author= await authorModel.findByIdAndDelete({_id:authorId});
      return res.status(200).send(author);
  }catch(er){
      return res.status(500).send({message:er.message});
  }
 })


 module.exports=AuthorRouter;
