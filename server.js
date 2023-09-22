const express = require('express');
const db = require('./config/connection');
const routes = require("./routes")

// Require model
// const {  } = require('./models');

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.get("/ping", (req, res)=> {res.status(200).json({})})

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });
  