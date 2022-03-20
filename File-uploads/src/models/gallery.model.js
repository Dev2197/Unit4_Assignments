const mongoose = require("mongoose");

const gallerSchema = new mongoose.Schema({
    gallery : {type:String, required:false},
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: false
      },
},
{
    versionKey:false,
    timestamps:true
}
);

module.exports = mongoose.model("gallery", gallerSchema);