const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    book_name: { type: String, required: true },
    description: { type: String, required: true },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "author",
      required: true,
    },
    date:{type:String,required:false},
  },
  {
    timestamps: true,
  }
);

const bookModel = mongoose.model("book", bookSchema);

module.exports = bookModel;
