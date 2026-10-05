const express = require("express");
const app = express();

// request handler
// whatever request comes in,send "hello from the server"
// this will override everything and other routes wont work
// app.use("/",(req, res) => {
//   res.send("hello from the server");
// });

// we can handle different request diffrently
app.use("/test", (req, res) => {
  res.send("hello from the server test ");
});
app.get("/user", (req, res) => {
  res.send({ firstname: "varsha", lastname: "vt" });
});
app.post("/user", (req, res) => {
  console.log("data successfully send to DB");
  res.send("data successfully send to DB");
});
app.delete("/user", (req, res) => {
  res.send("deleted successfully");
});

// writing this below every other route will work properly
// app.use("/", (req, res) => {
//   res.send("hello from the server");
// });

// listening to any incoming request coming to the port 3000
app.listen(7777, () => {
  console.log("server is successfully listening on port 3000");
});
