import axios from "axios";

const loginUser = (data, navigate) => async (dispact) => {
  try {
    dispact({
      type: "USER_LOGIN_PENDING",
    });
    const result = await axios.post(`http://localhost:3010/users/login`, data);
    const user = result.data.data;
    localStorage.setItem("token", user.token);
    dispact({
      type: "USER_LOGIN_SUCCESS",
      payload: user,
    });
    navigate("/home-login");
    console.log("User login success");
  } catch (err) {
    console.log("User login error");
    console.log(err);
  }
};

export default loginUser;
