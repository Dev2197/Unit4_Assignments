const express = require("express");

const Gallery = require("../models/gallery.model");

const user_pics = require("../middlewares/galleryMiddleware");

const router = express.Router();

router.get("", async(req,res)=>{
    try {
        const gallery = await Gallery.find().
        populate({path:UserId, select:{first_name:1, last_name:1} })
        lean().exec();
        return res.status(201).send(gallery);
    } catch (err) {
        return res.status(500).send({message:err.message});
    }
});

router.post("",user_pics.array("gallery",5), async(req,res)=>{
    try {
        const filePaths = req.files.map((file) => {
            return file.path;
          });

        const gallery_pics = await Gallery.create({
            user_pics : req.filePaths
        });

        return res.status(202).send(gallery_pics)
    } catch (err) {
        return res.status(500).send({message:err.message})
    }
})


 module.exports = router;