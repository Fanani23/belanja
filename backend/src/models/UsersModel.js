const Pool = require("../config/Database");

const createUser = (data) => {
  const { id, email, password, fullname, role } = data;
  return new Promise((resolve, reject) => {
    Pool.query(
      `INSERT INTO users ( id, email, password, fullname, role,)
            VALUES ('${id}', '${email}', '${password}', '${fullname}', '${role}')`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    );
  });
};

const findEmail = (email) => {
  return new Promise((resolve, reject) => {
    Pool.query(
      `SELECT * FROM users
        WHERE email = '${email}'`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    );
  });
};

const findRole = (role) => {
  return new Promise((resolve, reject) => {
    Pool.query(
      `SELECT * FROM roles
        WHERE role = '${role}'`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    );
  });
};

const verificationEmail = (email) => {
  return new Promise((resolve, reject) => {
    Pool.query(
      `UPDATE users SET verification=1 WHERE 'email'='${email}'`,
      (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      }
    );
  });
};

module.exports = { createUser, findEmail, findRole, verificationEmail };
