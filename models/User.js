const mongoose = require('mongoose');
const { schema } = mongoose;

const userSchema = new Schema ({
    imageUrl: String,
    signInType: Number,
    userEmail: {type: Number, required: true},
    userId: {type: String, required: true},
    userName: {type: String, required: true}
});

mongoose.model('user', userSchema);