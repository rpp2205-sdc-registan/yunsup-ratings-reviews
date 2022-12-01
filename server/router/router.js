const express = require("express");
const router = express.Router();

const ctrl = require("./router.ctrl");

router.get("/", ctrl.home);

router.get("/reviews", ctrl.getReview);
router.get("/reviews/meta/:product_id", ctrl.getMetaReview);
router.post("/reviews", ctrl.postReview);

module.exports = router;
