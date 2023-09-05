const User = require("../Models/UserModel");

const userJoin = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).send("Please Enter Name");
    }
    const user = await User.create({ name });
    if (user) {
      res.json(user);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { userJoin };
