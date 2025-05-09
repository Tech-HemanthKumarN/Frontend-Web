const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");


app.use(express.urlencoded({ extended: true })); // for form submissions
app.use(express.json()); // for JSON payloads
app.use(methodOverride("_method"));


app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

let posts = [ // in database id is automatically get created but here we are uisg array meathed but actually we have stoer the data in database
    {   id : uuidv4(),
        username : "Arya",
        content : "I Love Coding",
    },
    {   id : uuidv4(), 
        username : "Hemanth",
        content : "Peace",
    },
    {   id : uuidv4(), 
        username : "Chandhu",
        content : "I Love Money",
    },
    {   id : uuidv4(), 
        username : "Raghava",
        content : "I Love Familyv ",
    },
];

app.use(express.static(path.join(__dirname,"public")));

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    let{username, content} = req.body;
    let id = uuidv4(); 
    // res.send("Post request is working!");
    posts.push({id,username,content})
   
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id );
    res.render("show.ejs",{post});
});

app.patch("/posts/:id",(req,res) => {
    let {id} = req.params;
    let newContent= req.body.content;
    let post = posts.find((p) => id === p.id );
    post.content = newContent;
    console.log(post)
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req,res) =>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id );
    res.render("edit.ejs");
});

app.delete("/posts/:id",(req,res) =>{
    let{ id } = req.params;
    posts = posts.filter((p) => id !== p.id );
    res.redirect("/posts");
});

app.listen(port,()=>{
    console.log(`Listing to port : ${port}`);
});