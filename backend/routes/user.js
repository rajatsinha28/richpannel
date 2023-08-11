const router = require("express").Router();
const User = require("../models/User");

router.post("/register", async (req, res) => {
    try {
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            confirmpassword: req.body.confirmpassword
        });

        const result = await user.save();
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.post("/login", async (req, res) => {
    try {
        const user = await User.find({ email: req.body.email });

        !user && res.status(401).send("Wrong credentials!");
        // user.password !== req.body.password && res.status(401).send("Wrong credentials!");

        res.status(201).send(user);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;