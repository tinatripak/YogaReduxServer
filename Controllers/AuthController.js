const User = require("../Models/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }
    const auth = bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }

    const token = createSecretToken(user._id);

    res.send({
      message: "User logged in successfully",
      success: true,
      data: user, token,
    });
    next();
  } catch (error) {
    console.log("error")
    res.status(404).send({ success: false, msg: error });
    next();
  }
};

const Logout = async (req, res) => {
  try {
    res.cookie("token", null, {
      expires: new Date(0),
      sameSite: "None",
      path: '/',
    });

    res.status(204).json({ message: "User logged out successfully", success: true });
  } catch (error) {
    res.status(500).json({ success: false, msg: "Internal server error" });
  }
};

module.exports = { Login, Logout };
