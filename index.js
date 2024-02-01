const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();
require("dotenv").config();

const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");
const adminRoute = require("./Routes/AdminRoute");

const instructorRoute = require("./Routes/InstructorRoute");
const planRoute = require("./Routes/PlanRoute");
const videoRote = require("./Routes/VideoRote");

const { MONGO_URL, PORT } = process.env;

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(cors({
  origin: "https://yoga-redux.vercel.app",
  methods: "GET, POST, PUT, DELETE, OPTIONS",
  allowedHeaders: "Access-Control-Allow-Origin, Content-Type, Authorization",
  credentials: true,
}));

app.use(cookieParser());
app.use(express.json());

app.use("/", authRoute);
app.use("/admin", adminRoute); 
app.use("/instructor", instructorRoute);
app.use("/plan", planRoute);
app.use("/video", videoRote);
