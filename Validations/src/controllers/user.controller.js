const express = require("express")
const { body, validationResult } = require('express-validator');
const { findOne } = require("../models/user.model");

const User = require("../models/user.model");

const router = express.Router();

router.post("/",body("first_name").not().isEmpty().withMessage("First name can not be empty"),
   body("last_name").not().isEmpty().withMessage("Last name can not be empty"),
   body("email").not().isEmpty().withMessage("Email is required").isEmail()
   .custom(async (value)=>{
       const user = await User.findOne({email:value});

       if(user){
           throw new Error("Email is already taken");
       }

       return true
   }), body("pincode").not().isEmpty().withMessage("Pincode is requued").isNumeric().withMessage("Pincode must be 6 numbers")
   .custom((value)=>{
       if(value<100000 || value>999999){
           throw new Error("Pincode must be 6 numbers")
       }
       return true;
   }),
   body("age").not().isEmpty().withMessage("Age is required").isNumeric().withMessage("Age must be between 1 and 100").custom((value)=>{
       if(value < 1 || value > 100){
           throw new Error("Age must be between 1 and 100")
       }
       return true
   }),
   body("gender").not().isEmpty().withMessage("Gender is required")
   .custom((value)=>{
       if(value == "Male" || value=="Female" || value=="Others"){
           return true
       }
       else{
           throw new Error("Gender must be either Male or Female or Others");
       }
   }),
   async(req,res)=>{
    try {
        // console.log(body())
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
        }

        const user = await User.create(req.body)
        res.status(200).send(user)
    } catch (err) {
        res.status(500).send({message : err.message})
    }
})


module.exports = router;