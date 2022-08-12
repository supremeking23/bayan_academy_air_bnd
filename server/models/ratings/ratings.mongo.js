/* Schema */
const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
    customer_id: {
        type: String,
    },
    host_id: {
        type: String,
    },
    post_id: {
        type: String,
    },
    user_rating: {
        type: Number,
    },
    is_archived: {
        type: Number,
        enum: {
            /**
             * 0 not active
             * 1 active
             * 2 for verication
             */
            values: [0, 1]
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


module.exports = mongoose.model("Rating", ratingSchema);