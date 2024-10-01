const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mahasiswaRoutes = require("./app/routes/mahasiswa-route");
const pool = require("./database");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "app/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(
    "<h1>Welcome to the Mahasiswa CRUD Application</h1><a href='/mahasiswa'>Go to Mahasiswa List</a>"
  );
});

app.use("/mahasiswa", mahasiswaRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

pool.connect((err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Connected to database");
  }
});
