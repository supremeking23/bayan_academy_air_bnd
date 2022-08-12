/* Schema */
const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
    host_id: {
        type: mongoose.ObjectId,
    },
    title: {
        type: String,
    },
    sub_title: {
        type: String,
    },
    location_json: {
        /**
         * {
         *      location_name:
         *      coordinates: {
         *             longitude, latiude
         *      }
         * }
         *  
         *  */
    },
    images: {
        /**
         * [
         *     {
         *          id: 
         *          url:
         *          alt_text
         *      }
         * ]
         */
    },
    post_description: {
        type: String

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


module.exports = mongoose.model("Post", postsSchema);