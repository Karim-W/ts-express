import { Router } from "express";
const router = Router();

router.route("/").get((req, res) => {
  res.send("kill me").status(200);
});

module.exports = router;
