const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const rateLimit = require("express-rate-limit");


const taskRoutes = require("./routes/tasks");

const app = express();




app.use(helmet());
app.use(cors());
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 60
});
app.use(limiter);
app.use(express.json());
app.use(morgan("dev"));
app.get("/", (req, res) => {
  res.send("DevSecOps Task Manager API running 🚀");
});

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

app.use("/api/tasks", taskRoutes);

module.exports = app;
