/* Schema */
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    // id: {
    //     type: Number,
    // },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profile_url: {
        type: String,
    },
    is_active: {
        type: Number,
        enum: {
            /**
             * 0 not active
             * 1 active
             * 2 for verication
             */
            values: [0, 1, 2]
        }
    },
    phone_number: {
        type: String,
        
    },
    country: {
        type: String,
        
    },
    /* optional field */
    birthdate: { 
        type: Date, 
    },
    user_level: {
        type: Number,
        enum: {
            /**
             * 0 admin
             * 1 custom
             * 2 host
             */
            values: [0, 1, 2]
        }
    },
    created_at: { 
        type: Date, 
        default: Date.now 
    },
    updated_at: { 
        type: Date, 
        default: Date.now 
    },
});


module.exports = mongoose.model("User", userSchema);