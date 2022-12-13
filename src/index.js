require("dotenv").config();
const express = require("express");
var cors = require("cors");
const db_connection = require("./db/db_config");
const customRouteHandler = require("./routes/CustomRouteHandler");
const app = express();

app.use(express.json());
app.use(cors());
app.use(customRouteHandler);

const PORT = process.env.PORT || 3001;

db_connection.on("open", () => {
  console.log("Connection Established with DB");
});

app.listen(PORT, () => {
  console.log("SERVER is Listening", PORT);
});
