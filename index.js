require("dotenv").config();

const express = require("express");
const router = require("./router");
const path = require("path");

const dir_path = path.resolve();
const app = express();
const PORT = process.env.PORT ?? 3333;

app.set("view engine", "ejs");
app.set("views", path.resolve(dir_path, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);

app.listen(PORT);
