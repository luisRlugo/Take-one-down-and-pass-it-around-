const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>99 Bottles of beer on the wall</h1>
    <a href ="/98">Take one down pass it around</a>`);
});

app.get("/:numberOfBottles", (req, res) => {
  if (req.params.numberOfBottles > 0) {
    res.send(`<h1>${req.params.numberOfBottles} Bottles of beer on the wall</h1>
        <a href ="/${
          req.params.numberOfBottles - 1
        }">Take one down pass it around</a>`);
  } else {
    res.send(`<a href ="/">Start over</a>`);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
