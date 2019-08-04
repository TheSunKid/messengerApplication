import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let UserSchema = new Schema({
    username: String,

    gender:   {type: String, default:"male" },

    phone :   {type: Number,default:null},

    address:  {type: String,default:null},

    avatar:   {type: String,default:"avata_default.jpg"},

    role:     {type:String,default:"user"},

    local:    {
        email : {type:String,trim:true},
        password: String,
        isActive:{type: Boolean,default:false},
        verifyToker:String,
    },

    facebook:{
        uid: String,
        toker: String,
        email:{type: String, trim:true}
    },

    google:{
        uid: String,
        toker: String,
        email:{type: String, trim:true}
    },

    createdAt: {type: Number,default: Date.now},
    updatedAt: {type: Number,default: null},
    deletedAt: {type: Number,default: null},
})  
module.exports = mongoose.model("user",UserSchema);