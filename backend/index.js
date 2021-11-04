const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const PORT = 3001;
const app = express();
const todoRoutes = require("./routes/todoRoutes");
const connectionOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true, //   useFindAndModify: false,
};

app.use(express.json());
app.use(cors());

// mongodb://localhost/todolist
mongoose
  .connect(process.env.URI, connectionOptions)
  .then(() => console.log("Connected successfully!"))
  .catch((error) => console.error(error));

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
