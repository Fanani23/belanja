const { response } = require(`../middleware/Common`);
const { create, findEmail, findRole } = require(`../models/UsersModel`);
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const { generateToken } = require(`../helper/Auth`);

const usersController = {
  register: async (req, res, next) => {
    let {
      rows: [users],
    } = await findEmail(req.body.email);
    if (users) {
      return response(
        res,
        404,
        false,
        "Email in already use!",
        "Register failed!"
      );
    }

    let {
      rows: [role],
    } = await findRole(req.params.role);
    if (!role) {
      return response(res, 404, false, "Role not found!", "Register failed!");
    }

    let salt = bcrypt.genSaltSync(10);
    let password = bcrypt.hashSync(req.body.password);
    let data = {
      id: uuidv4(),
      email: req.body.email,
      password,
      fullname: req.body.fullname,
      role: req.body.role,
    };

    try {
      const result = await create(data);
      if (result) {
        console.log(result);
        response(res, 200, true, true, "Register success");
      }
    } catch (err) {
      console.log(err);
      response(res, 404, false, err, "Register failed");
    }
  },

  login: async (req, res, next) => {
    console.log("email", req.body.email);
    console.log("password", req.body.password);
    let {
      rows: [users],
    } = await findEmail(req.body.email);
    if (!users) {
      return response(res, 404, false, null, "Email not found!");
    }
    const password = req.body.password;
    const validation = bcrypt.compareSync(password, users.password);
    if (!validation) {
      return response(res, 404, false, null, "Wrong password!");
    }

    delete users.password;
    let payload = {
      email: users.email,
      role: users.role,
    };
    users.token = generateToken(payload);

    response(res, 200, true, users, "login success");
  },
};

exports.usersController = usersController;
