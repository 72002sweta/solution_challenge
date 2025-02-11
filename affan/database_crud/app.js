const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Bookstore = require("./model/bookstore")

const app=express();
mongoose.connect('mongodb://localhost:27017/bookstoreSamp');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));
//app.use(express.static('public'));


app.get("/", function (req,res){
    res.sendFile(__dirname + "/cover.html");
})


app.get("/create",(req,res)=>{
    res.sendFile(__dirname + "/form.html");
})

app.get("/contactUs",(req,res)=>{
    
    res.sendFile(__dirname + "/contact_us.html")
})
app.post("/",async function(req,res){
    let searchQuery=req.body.searchInput;
    const bookData = await Bookstore.find({ name: searchQuery});
    console.log(bookData);
})

app.post("/create",async (req,res)=>{
    console.log(req.body);
    const newBook= Bookstore(req.body);
    await newBook.save();
})

app.post("/contactUs",async (req,res)=>{
    console.log(req.body);
})

app.listen(3000,function(){
    console.log("server started at 3000");
})