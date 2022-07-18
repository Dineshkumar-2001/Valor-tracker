const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "valor_details",
});

app.post("/Details", (req, res) => {
  const Email = req.body.Email;
  const password = req.body.password;
  console.log("ll", req.body);

  if (Email && password) {
    const query_1 = `select * from  valor where user_email="${Email}" and user_password="${password}"`;
    db.query(query_1, (err, result) => {
      console.log("result", result);
      console.log("error", err);
      if (err) {
        console.log(err);
      } else {
        res.status(200).send({ message: "success", results: result });
      }
    });

    db.connect((err) => {
      err ? console.log(err) : console.log("connected");
    });
  } else {
    res.status(500).send({ message: "error" });
  }
});

app.listen(5001, () => {
  console.log("yes,server is running on port 5001");
});
