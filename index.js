const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "http://realstate.digitalsketchsolution.com/",
  user: "root",
  password: "",
  database: "CRUDDatabase1",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.get("/api/get", (req, res) => {
//   const sqlSelect = "SELECT * FROM contact";
//   db.query(sqlSelect, (err, result) => {
//     res.send(result);
//   });
// });

app.post("/api/insert", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  const sqlInsert = "INSERT INTO contact (name, email, message) VALUES (?,?,?)";
  db.query(sqlInsert, [name, email, message], );

});

app.listen(4000, () => {
  console.log("running on port 4000");
});
