import express from "express";
const app = express();
const db = require("./db");
import bodyParser from "body-parser";
import methodOverride from "method-override";
import mysql from "mysql2";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

export const connection = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "0000",
});

connection.connect();

export default function (req, res, next) {
  console.log(req.url);
  next();
}

app.get("/", function (req, res) {
  res.send("Hello World!");
});
// app.listen(3000, () => {
//   console.log('gkdl')
// })
module.exports = {
  path: "/api",
  handler: app,
};