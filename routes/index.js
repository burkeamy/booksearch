const path = require("path");
const router = require("express").Router();
const axios = require("axios");
//const apiRoutes = require("./api");

router.get("/books", (req, res) => {
    axios
        .get("https://www.googleapis.com/books/v1/volumes", /*{params: req.query}*/ )
        .then(({ data: {results}}) => res.json(results))
        .catch(err => res.status(422).json(err));

        
    console.log(results);
})

module.exports = router;