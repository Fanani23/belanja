const express = require(`express`);
const router = express.Router();
const { usersController } = require(`../controllers/UsersController`);
const { role } = require(`../middleware/Auth`);

router.post(`/register/:role`, role, usersController.insert);
router.post(`/login`, usersController.login);

module.exports = router;
