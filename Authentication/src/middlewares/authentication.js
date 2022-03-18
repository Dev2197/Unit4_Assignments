const { promise } = require('bcrypt/promises');
const jwt = require('jsonwebtoken');

require('dotenv').config()

const verifyToken = (token)=>{
    return new Promise((resolve,reject)=>{

        var decoded = jwt.verify(token,  process.env.JWT_SECRET_KEY,(err,decoded)=>{
            if(err) return reject(err)
    
            return resolve(decoded)
        });
    })
}

const authenticate =async (req,res,next)=>{

    if(!req.headers.authorization){
        return res.status(400).send({message:"Authoriztion token not found or Imcorrect"})
    }

    if(!req.headers.authorization.startsWith("Bearer ")){
        return res.status(400).send({message:"Authoriztion token not found or Imcorrect"})
    }

    const token = req.headers.authorization.split(" ")[1];

    let decoded;
    try {
         decoded = await verifyToken(token)
    } catch (err) {
        console.log(err)
        return res.status(500).send({message:"Authoriztion token not found or Incorrect"})
    }

    // console.log(decoded);

    req.user = decoded.user;
    return next();
}

module.exports = authenticate;