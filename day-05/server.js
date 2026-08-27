import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Book from "./models/Book.js"
dotenv.config();

const app = express();

app.use(express.json())

//create a book:
app.post("/books",async (req, res)=>{
    const book  = await Book.create(req.body);
    if (!book){
        return res.status(404).json({
            message:"error cannot insert book"
        });
    }
    res.status(201).json(book);
});

//get all books
app.get("/books", async (req, res)=>{
    const books =await Book.find();
    if (!books){
        return res.status(404).json({
            message:"error cannot find books"
        });
    }
    res.status(200).json(books);
});

//get a specific book
app.get("/books/:id",async (req, res)=>{
    const id = req.params.id;
    const book = await Book.findById(id);
    if (!book){
        return res.status(404).json({
            message:"error cannot find book"
        });
    }
    res.status(200).json(book);

});

//update a book
app.put("/books/:id", async (req, res)=>{
    const id=req.params.id;
    const book = await Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    if (!book){
        return res.status(404).json({
            message:"error cannot find book"
        });
    }
    res.status(200).json(book);

});

//delete a book
app.delete("/books/:id", async (req, res)=>{
    const id=req.params.id;
    const book = await Book.findByIdAndDelete(id);
    if (!book){
        return res.status(404).json({
            message:"error cannot find book"
        });
    }
    res.status(200).json(book);
});

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB connected");
    app.listen(5000, ()=>{
        console.log("server running at local host 5000");
    });
})
.catch((err)=>{
    console.log("Mongo db connection failed!");
})


