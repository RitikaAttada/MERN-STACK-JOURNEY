import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res)=>{
    res.send("hello everyone nice to meet you :-)");
})

app.listen(5000, (req, res)=>{
    console.log("server is live at localhost 5000");
})
