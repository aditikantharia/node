const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const db = require("./config/db");
const userRoute = require("../express_apis/routes/web/user.route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
db();

//to excess env values in file:
//Backend (node +express)-->process.env(env file variable name)
//Frontend (React) -->import.meta.env(env file variable name)
PORT = process.env.PORT;

//home route (temp route )--> in backend we don't create  a home route.
// after testing/development -->Remove Home Route
app.get("/", (req, res) => {
  res.send("Server's Home Page");
});
app.use("/user",userRoute); //1.localhost:3005/user/register

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
