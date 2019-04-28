const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

//route when api is present
router.use("/api", apiRoutes);

//route if no api is found
router.use(function(req, res) {
    res.sendFile(path.join(_dirname), "./client/build/index.html");
});

module.exports = router;