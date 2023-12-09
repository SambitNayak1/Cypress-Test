const express = require("express");
const app = express();
const PORT = 3800;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

// Setup dotenv to hide username and password like important data
dotenv.config();

//Middleware
app.use(express.json());

//Middleware for router
app.use("/api/user", authRoute);

//Connect to mongoDB
mongoose.connect(process.env.url, { useNewUrlParser: true });

//Event listner for db
const db = mongoose.connection;

db.on("error", (err) => {
  console.log("Error while connecting to DB");
});

db.once("open", () => {
  console.log("Connection with DB Success");
});

app.get("/data", (req, res) => {
  res.status(200).send("Hello from Sambit");
});

app.listen(PORT, (error) => {
  if (error) {
    console.log("Getting app running error", error);
  }
  console.log("App is up and running on port:", PORT);
});
