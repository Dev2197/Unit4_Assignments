const express = require("express");
const router = express.Router();

const authenticate = require("../middlewares/authentication")

const Posts = require("../models/post.model");

router.post("", authenticate, async(req,res)=>{
    req.body.userId = req.user._id;
    try {
        const posts = await Posts.create(req.body);
        return res.status(200).send(posts);
    } catch (err) {
        return res.status(500).send({message:err.message})
    }
})

router.get("", authenticate, async(req,res)=>{
    req.body.userId = req.user._id;
    try {
        const posts = await Posts.find()
        .populate({
            path: "userId",
            select: { name: 1, email: 1, _id: 0 },
          })
        return res.status(200).send(posts);
    } catch (err) {
        return res.status(500).send({message:err.message})
    }
});

//Delete
router.delete("/:id", authenticate, async(req,res)=>{
    // req.body.userId = req.user._id;
    try {
        const posts = await Posts.findByIdAndDelete(req.params.id).lean().exec()
        return res.status(200).send(posts);
    } catch (err) {
        return res.status(500).send({message:err.message})
    }
});

module.exports = router;