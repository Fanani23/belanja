const { response } = require(`../middleware/Common`);
const {
  createUser,
  findEmail,
  findRole,
  verificationEmail,
} = require(`../models/UsersModel`);
const bcrypt = require("bcryptjs");
const { v4: uuidv4 } = require("uuid");
const { generateToken } = require(`../helper/Auth`);
const email = require("../middleware/VerificationEmail");

const Port = process.env.PORT;
const Host = process.env.HOST;

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

    let digitsOTP = "0123456789";
    let OTP = "";
    for (let i = 0; 1 < 6; i++) {
      OTP += digitsOTP[Math.floor(Math.random() * 10)];
    }

    let salt = bcrypt.genSaltSync(10);
    let password = bcrypt.hashSync(req.body.password, salt);
    let data = {
      id: uuidv4(),
      email: req.body.email,
      password,
      fullname: req.body.fullname,
      role: req.body.role,
    };

    try {
      const result = await createUser(data);
      if (result) {
        console.log(result);
        let verifyURL = `http://${Host}:${Port}/${req.body.email}/${OTP}`;
        let sendEmail = email(data.email, OTP, verifyURL, data.fullname);
        if (sendEmail == "Email not send!") {
          return response(res, 404, false, null, "Register failed!");
        }
        response(res, 200, true, { email: data.email }, "Register success");
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
    if (users.verification == 0) {
      return response(res, 404, false, null, "Email not verified!");
    }
    const password = req.body.password;
    const validation = bcrypt.compareSync(password, users.password);
    if (!validation) {
      return response(res, 404, false, null, "Wrong password!");
    }

    delete users.password;
    delete users.otp;
    delete users.verification;
    let payload = {
      email: users.email,
      role: users.role,
    };
    users.token = generateToken(payload);

    response(res, 200, true, users, "login success");
  },

  otp: async (req, res, next) => {
    console.log("email", req.params.email);
    console.log("password", req.params.otp);
    let {
      rows: [users],
    } = await findEmail(req.params.email);
    if (!users) {
      return response(res, 404, false, null, "Email not found!");
    }
    if (users.otp == req.params.otp) {
      const result = await verificationEmail(req.params.email);
      return response(res, 200, true, result, " verification email success");
    }
    return response(
      res,
      404,
      false,
      null,
      " wrong otp please check your email"
    );
  },
};

exports.usersController = usersController;
