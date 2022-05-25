const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./src/config/db.config");

db.sequelizeObj.sync();

app.get("/", (req, res) => {
  res.json({ message: "It's running !!!" });
});

require("./src/routes/ong.routes")(app);
require("./src/routes/external.routes")(app);

const PORT = process.env.port || 3003;

app.listen(PORT, () => {
  console.log(`It's running on port ${PORT}.`);
});
