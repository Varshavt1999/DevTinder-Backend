const express = require("express");
const app = express();

// request handler
// whatever request comes in,send "hello from the server"
// app.use((req, res) => {
//   res.send("hello from the server");
// });

// we can handle different request diffrently
app.use("/test", (req, res) => {
  res.send("hello from the server test ");
});

// listening to any incoming request coming to the port 3000
app.listen(3000, () => {
  console.log("server is successfully listening on port 3000");
});
