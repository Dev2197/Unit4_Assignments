const User = require("../models/user.model");

const jwt = require('jsonwebtoken');

require('dotenv').config()

const generateToken = (user)=>{
    // console.log(process.env.JWT_SECRET_KEY)
    return jwt.sign({user}, process.env.JWT_SECRET_KEY);
}

//Register
const register = async (req,res)=>{
    try {
        let user = await User.findOne({email : req.body.email})

        //checking email
        if(user){
            return res.status(400).send({message : "Email already Exists"})
        }

        //new user allow to register
        user = await User.create(req.body);

        const token = generateToken(user);

        return res.status(200).send({user,token})
    } catch (err) {
        res.status(500).send({message:err.message})
    }
}


//Login
const login = async (req,res)=>{
    try {
        const user = await User.findOne({email: req.body.email})

        //check mail exists
        if(!user){
            return res.status(400).send("Wrong Email or password")
        }

        //if mail exists, check password
        const match_password = user.checkPassword(req.body.password)

        //if password doesn't match
        if(!match_password){
            return res.status(400).send("Wrong email or password");
        }

        //if password matches
        const token = generateToken(user);

        return res.status(200).send({user,token})

    } catch (err) {
        res.status(500).send({message:err.message})
    }
}

module.exports = {register,login}