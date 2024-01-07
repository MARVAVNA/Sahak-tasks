const { Router } = require("express");
const MainController = require("../controller/MainController");
const UserController = require("../controller/UserController");

const router = Router();

router.get("/", MainController.index);
router.get("/login", UserController.login);
router.post("/login", UserController.auth);
router.get("/registration", UserController.registration);
router.post("/registration", UserController.create);

module.exports = router;
