const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3004;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
const axios = require("axios");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// defining api routes
app.use("/api", routes);

//sending requests to the React app, defining routes before they run
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

//connectiong MongoDB
mongoose.connect(process.env.NOMGODB_URI || "mongodb://localhost/googlebooks")

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
