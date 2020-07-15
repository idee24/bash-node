const mongoose = require("mongoose");
const {Schema} = mongoose;

const eventCategorySchema = new Schema ({
    categoryId: Number,
    name: String
});

mongoose.model('eventCategories', eventCategorySchema);