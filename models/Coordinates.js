const mongoose = require("mongoose");
const {Schema} = mongoose;

const coordinatesSchema = new Schema ({
    latitude: Number,
    longitude: Number
});

mongoose.model('coordinates', coordinatesSchema);