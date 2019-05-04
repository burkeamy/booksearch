const path = require("path");
const router = require("express").Router();
const axios = require("axios");
//const apiRoutes = require("./api");
//AIzaSyAFm9cp0bESuJcACRLuVdU6glnYiZ6XJps
//https://www.googleapis.com/books/v1/volumes?q=bible:&key=AIzaSyAFm9cp0bESuJcACRLuVdU6glnYiZ6XJps&startIndex=0&maxResults=40

router.get("/api/books", (req, res) => {
    axios
    .get("https://www.googleapis.com/books/v1/volumes?q=bible:&key=AIzaSyAFm9cp0bESuJcACRLuVdU6glnYiZ6XJps&startIndex=0&maxResults=40", /*{params: req.query}*/ )
    .then((data) => {
        console.log('data???????????? ', data)
        res.json(data)
    }) 
    .catch(err => res.status(422).json(err));

    // .get("https://www.googleapis.com/books/v1/volumes", /*{params: req.query}*/ )
        // .then(({ data: {results}}) => res.json(results))
        // .catch(err => res.status(422).json(err));

        
    // console.log(results);
})

module.exports = router;