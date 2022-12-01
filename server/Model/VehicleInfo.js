//content for VehicleINFO.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const carSchema = new Schema({
    make_model:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true,
    },
    year:{
        type: Number,
        required: true,
    },
    engine:{
        type: String,
        required: true,
    },
    inStock:{
        type: Boolean,    
    }    
})
//export schema to be used in other files
module.exports = mongoose.model("VehicleINFO", carSchema)
