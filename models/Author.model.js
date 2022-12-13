let mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    author: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
const authorModel= mongoose.model('author',authorSchema);

module.exports=authorModel;