import express from "express";

const app = express();

app.use(express.json());

let tasks = [
    {
        id:1, 
        desc:"learn express",
        completed:false
    },
    {
        id:2,
        desc: "Learn React",
        completed: false
    }
];


//get all tasks
app.get("/tasks", (req, res)=>{
    res.json(tasks);
});

//get a specific task
app.get("/tasks/:id", (req, res)=>{
    const id = Number(req.params.id);
    const task = tasks.find(task=>task.id===id);
    res.json(task);
});

//create a task
app.post("/tasks", (req, res)=>{
    const newTask={
        id:tasks.length+1,
        desc:req.body.desc,
        completed:false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

//update a task
app.put("/tasks/:id", (req, res)=>{
    const id = Number(req.params.id);
    const description = req.body.desc;
    const completion = req.body.completed;
    var task = tasks.find(task => task.id === id);
    if (!task){
        return res.status(404).json({
            message:"task not found"
        });
    }
    task.desc = description;
    task.completed=completion;
    res.json(task);
});


//delete a specific task
app.delete("/tasks/:id", (req, res)=>{
    const id = Number(req.params.id);
    const index = tasks.findIndex(task=>task.id===id)
    if (index===-1){
        return res.status(404).json({
            message:"request not found"
        });
    }
    const deleted = tasks.splice(index, 1);
    res.json({
        message:"task deleted",
        task:deleted[0]
    });
});

app.listen(5000, ()=>{
    console.log("server is running on localhost 5000");
});