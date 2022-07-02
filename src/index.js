const express = require("express");
const app = express();

const port = 3000; // default port to listen
//Configuraciones
app.set("port", process.env.PORT || port);
app.set("json spaces", 2);
// Configure Express to use EJS

// define a route handler for the default home page
app.get("/", (req, res) => {
  // render the index template
  res.render("index");
});

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
