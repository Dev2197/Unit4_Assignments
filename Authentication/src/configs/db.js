const mongoose = require("mongoose");

module.exports = ()=>{
    return mongoose.connect("mongodb+srv://Dev:Dev123@cluster0.mriz8.mongodb.net/web15?retryWrites=true&w=majority")
}