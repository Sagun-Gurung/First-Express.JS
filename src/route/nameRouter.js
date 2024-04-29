import { Router } from "express";

export let nameRouter = Router()

nameRouter.route("/")
.post((req, res, next) => {
    console.log("Post Name")
})
.get((req, res, next) => {
    console.log("Get Name")
})
.patch((req, res, next) => {
    console.log("Patch Name")
})
.delete((req, res, next) => {
    console.log("Delete Name")
})