import { Router } from "express";
import {
  getAllUsers,
  createUser,
} from "../../Controllers/Users/Users.controller";
import { user } from "../../Entities/user";
import "reflect-metadata";

const router = Router();

router.route("/").get(async (req, res) => {
  let users = await getAllUsers(req.app.get("ctx"));
  res.send(users).status(200);
});
router.post("/", async (req, res) => {
  let response = await createUser(req.app.get("ctx"), req.body);
  res.send(response).status(200);
});

module.exports = router;
