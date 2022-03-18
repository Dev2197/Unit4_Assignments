const mongoose = require('mongoose');

const postsSchema = new mongoose.Schema({
    title : {type:String, required:true},
    body : {type:String, required : true},
    userId : {type:mongoose.Schema.Types.ObjectId, ref:"user", required:true}
},
{
    versionKey:false,
    timestamps:true
}
);

const Posts = mongoose.model("posts",postsSchema);

module.exports = Posts