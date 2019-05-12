
const API_KEY = process.env.bookKey;
const path = require("path");
const router = require("express").Router();
const axios = require("axios");
//const apiRoutes = require("./api");
//AIzaSyAFm9cp0bESuJcACRLuVdU6glnYiZ6XJps
//https://www.googleapis.com/books/v1/volumes?q=bible:&key=IzaSyAFm9cp0bEASuJcACRLuVdU6glnYiZ6XJps&startIndex=0&maxResults=40

/*router.get("/books", (req, res) => {
  axios
     .get( "https>://www.googleapis.com/books/v1/volumes?q=hobbit:&key=AIzaSyAFm9cp0bESuJcACRLuVdU6glnYiZ6XJps&startIndex=0&maxResults=40")
     .then(({data: {results} }) => res.json(results))
     .catch(err => res.status(422).json(err));
})*/


router.get("/api/books", (req, res) => {
  console.log("in routes folder")
  axios
    .get(
      "https://www.googleapis.com/books/v1/volumes?q=hobbit:&key=AIzaSyAFm9cp0bESuJcACRLuVdU6glnYiZ6XJps&startIndex=0&maxResults=40") /* {params: req.query})*/
      .then(res => {
      console.log("data???????????? ", res.data);
      res.json(res.data)})
    .catch(err => res.status(422).json(err));
});

module.exports = router;