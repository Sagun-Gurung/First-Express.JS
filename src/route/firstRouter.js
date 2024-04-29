import { Router } from "express";


export let firstRouter = Router();

firstRouter
.route("/") //localhost:8000
.post((req, res, next) => {
    console.log("Home Post")
}).get((req, res, next) => {
    console.log("Home Get")
})
.patch((req,res,next) => {
    console.log("Home Patch")
})
.delete((req,res,next) =>{
    console.log("Home Delete")
})