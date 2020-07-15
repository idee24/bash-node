const mongoose = require("mongoose");
const {Schema} = mongoose;

const locationSchema = new Schema ({
    address: String,
    _coordinates: { type: Schema.Types.ObjectId, ref: 'coordinates' },
    name: String,
    subAdmin: String
});

mongoose.model('location', locationSchema);