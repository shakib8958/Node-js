const express = require("express");
const mongoose = require('mongoose');
const app=express();
const connectDB=async ()=>{
    mongoose.connect('mongodb://localhost:27017/e-com');
    const productSchema=new mongoose.Schema({});
    const product=mongoose.model('product',productSchema);
    const data=await product.find();
    console.log(data);

}
connectDB();
app.listen(5000);