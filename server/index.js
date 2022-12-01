require("dotenv").config();
const express = require("express");
const router = require("./router/router");

const app = express();
app.use(express.json());

app.use("/", router);

app.listen(process.env.PORT, () => {
	console.log(`Listening at http://localhost:${process.env.PORT}`);
});
