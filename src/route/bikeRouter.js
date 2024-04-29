import { Router } from "express";

export let bikeRouter = Router();

// bikeRouter
//   .route("/")
//   .post((req, res, next) => {
//     // console.log("Post My Bike");
//     // let bikeName = req.body;
//     // res.json(bikeName);
//     console.log(req.body)
//   })
//   .get((req, res, next) => {
//     // console.log("Get The Bike");
//     res.json("Get The Bike");
//   })
//   .patch((req, res, next) => {
//     // console.log("Patch My Bike");
//     res.json("Upgrade The Bike");
//   })
//   .delete((req, res, next) => {
//     // console.log("Sell My Bike :(");
//     res.json("Sell/Scrap The Bike");
//   });

bikeRouter
  .route("/")
  .post(
    (req, res, next) => {
      console.log("I am middleware1");
      let error = new Error("I am Error HAHAHAHAHAHA");
      next(error);
    },
    (err, req, res, next) => {
      console.log("I am an error middleware1");
      next(err);
    },
    (req, res, next) => {
      console.log("This is normal middleware2");
    },
    (err, req, res, next) => {
      console.log(err.message);
    },
    (req, res, next) => {
      console.log("I am middleware3");
      res.json({
        success: true,
        message: "bike created successful",
      });
    }
  )
  .get((req, res, next) => {
    // console.log("bike get")
    res.json("bike get");
  })
  .patch((req, res, next) => {
    //    console.log("bike update")
    res.json("bike patch");
  })
  .delete((req, res, next) => {
    // console.log("bike delete")
    res.json("bike delete");
  });

bikeRouter
  .route("/name") //localhost:8000/bike/name
  .get((req, res, next) => {
    res.json("Bike Name Get");
    // console.log(req.params)
  });

bikeRouter.route("/:id").get((req, res, next) => {
  console.log(req.params); //get params
});
