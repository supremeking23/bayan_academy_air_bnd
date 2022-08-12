const mongoose = require("mongoose");

// Update below to match your own MongoDB connection string.
const MONGO_URL = "mongodb://localhost:27017/airbnd";

mongoose.connection.once("open", () => {
    console.log("Mongodb connection ready!");
});

mongoose.connection.on("error", (error) => {
    console.log(error);
});

async function mongoConnect(){
    await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect(){
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect
};

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://localhost:27017/airbnd');
// }
// const kittySchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     }
// });

// const Kitten = mongoose.model('Kitten', kittySchema);

// const silence = new Kitten({ name: 'Silence' });
// console.log(silence.name); // 'Silence'
