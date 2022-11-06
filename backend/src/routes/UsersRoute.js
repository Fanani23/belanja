const express = require(`express`);
const router = express.Router();
const { usersController } = require(`../controllers/UsersController`);
const { role } = require(`../middleware/Auth`);

router.post(`/register/:role`, role, usersController.register);
router.post(`/login`, usersController.login);
router.get(`/:email/:otp`, usersController.otp);

module.exports = router;
