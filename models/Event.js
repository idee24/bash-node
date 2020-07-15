const mongoose = require('mongoose');
const { schema } = mongoose;

const eventSchema = new Schema ({
    attendees: Array,
    eventAges: Array,
    _eventCategory: { type: mongoose.Schema.Types.ObjectId, ref: 'eventCategory' },
    eventCount: Number,
    eventFeatures: Array,
    eventId: { type: String, required: true },
    eventImageUrl: String,
    _eventLocation: { type: mongoose.Schema.Types.ObjectId, ref: 'location' },
    eventName: String,
    eventTimeStart: Date,
    eventTimeEnd: Date,
    eventType: String,
    isPublicEvent: Boolean,
    _organiser: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
});

mongoose.model('event', eventSchema);