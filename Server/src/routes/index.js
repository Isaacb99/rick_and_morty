const {getCharById} = require("../controllers/getCharById")
const {loginUser} = require("../controllers/login")
const {postFav, deleteFav} = require("../controllers/handleFavorites")

const express = require('express');
const router = express.Router();

router.get("/character/:id", getCharById)

router.get("/login", loginUser)

router.post("/fav", postFav)

router.delete("/fav/:id", deleteFav)


module.exports = router

