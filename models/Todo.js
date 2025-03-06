const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
    {
        title:{
            type: "string",
            required:true,
            maxLength :50,
        },
        description:{
            type: "string",
            required :true,
            maxLength :50,
        },
        createsAt :{
            type:Date,
            required :false,
            default:Date.now(),
        },
        updatedAt :{
            type :Date,
            required:false,
            default:Date.now(),
        }
    }
);

module.exports = mongoose.model("Todo",todoSchema);