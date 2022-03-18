
const express = require('express');

const User = require("../models/user.model");

const upload = require("../middlewares/uploads");

const router = express.Router();

router.get("", async (req,res)=>{
    try {
        const users = await User.find().lean().exec();
        return res.status(200).send(users);
    } catch (err) {
        return res.status(500).send({message: err.message})
    }
});

router.post("/profile_pic",upload.single("profile_pic"), async (req,res)=>{
    try {
        const user = await User.create({
            first_name : req.body.first_name,
            profile_pic: req.file.path
        });

        return res.status(200).send(user);
    } catch (err) {
        return res.status(500).send({message:err.message})
    }
})

module.exports = router;