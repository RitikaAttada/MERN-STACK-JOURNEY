import express from "express"

const app = express();
app.use(express.json());

let books = [
    {
        id:1,
        title:"Atomic habits",
        author:"James Clear"
    }
];

//get all books
app.get("/books", (req, res)=>{
    res.status(200).json(books);
});

//get a specific book
app.get("/books/:id", (req,res)=>{
    const id = Number(req.params.id);
    const book = books.find(book => book.id === id);
    if (!book){
        return res.status(404).json({
            message:"error: book not found"
        });
    }
    res.status(200).json(book);
});

//add a book
app.post("/books", (req, res)=>{
    const newBook = {
        id: books.length+1,
        title: req.body.title,
        author: req.body.author
    }
    books.push(newBook);
    res.status(201).json(newBook);
})

//update a specific book's info
app.put("/books/:id", (req, res)=>{
    const id = Number(req.params.id);
    let book = books.find(book=>book.id===id);
    if (!book){
        return res.status(404).json({
            message:"error: book not found"
        });
    }
    book.title=req.body.title;
    book.author=req.body.author;
    res.json(book);
})

//delete a book
app.delete("/books/:id", (req, res)=>{
    const id = Number(req.params.id);
    let index = books.findIndex(book=>book.id===id);
    if (index===-1){
        return res.status(404).json({
            message:"error: book not found"
        });
    }
    const book = books.splice(index, 1);
    res.json(book);
});

app.listen("5000", ()=>{
    console.log("server is running on local host 5000");
});


