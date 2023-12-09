const router = require("express").Router();

const User = require("../models/Users");

//going to use custom end point ('/api/user/register')
router.post("/register", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });

  try {
    const saveUser = await user.save();
    res.status(201).send(saveUser);
    console.log(saveUser);
  } catch (error) {
    res.status(400).send(error);
    console.log("Error", error);
  }
});

module.exports = router;
