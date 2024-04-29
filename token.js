import jwt from "jsonwebtoken";
let infoObj = {
  id: "1223",
};

let secretKey = "dw12";

let expiryInfo = { expiresIn: "365d" };

let token = jwt.sign(infoObj, secretKey, expiryInfo);
console.log(token);

// token = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZiI6IjEyMjMiLCJpYXQiOjE3MDk3MTgyNDIsImV4cCI6MTc0MTI1NDI0Mn0.Y40XERkV4rgj2j4762D1AUz-JawbVXTELxH9s-Ft25o

// ########### Verify Token ##############
let myToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZiI6IjEyMjMiLCJpYXQiOjE3MDk3MTg1NTYsImV4cCI6MTc0MTI1NDU1Nn0.-dePe6VI5HXiMqLJpOKe_RtOc_eNIXEdZtuPP7PLDJI";
try {
  let infoObj1 = jwt.verify(myToken, "dw12"); //it will send infoObjects if the secret key is correct else it throws error
  console.log(infoObj1);
} catch (error) {
  console.log(error.message);
}
