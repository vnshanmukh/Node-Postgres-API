const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 5000;

const api = require("./api");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/horrors/", api.getAllHorrors);
app.get("/horrors/:id", api.getHorrorbyId);
app.post("/horrors", api.posthorror);
app.put("/horrors/:id", api.updateHorror);
app.delete("/horrors/:id", api.deleteHorror);

app.listen(port, () => {
  console.log(`api is running on port ${port}.`);
});
