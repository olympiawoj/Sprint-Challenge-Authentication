const router = require("express").Router();
const Users = require("../config/users-model");
const bcrypt = require("bcryptjs");

//REGISTER:    implement user registration
router.post("/register", async (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 8);
  user.password = hash;
  console.log(user);
  try {
    const saved = await Users.add(user);
    res.status(201).json(saved);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error registering user" });
  }
});

module.exports = router;
