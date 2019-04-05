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

//LOGIN: implement user login
router.post("/login", async (req, res) => {
  let { username, password } = req.body;
  console.log(username, password);
  try {
    if (username && password) {
      console.log("both");
      const user = await Users.findBy({ username });
      res.status(200).json({ message: `Welcome ${user.username}` });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

module.exports = router;
