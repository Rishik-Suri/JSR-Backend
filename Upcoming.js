import mongoose from 'mongoose';

const UpcomingSchema = new mongoose.Schema({
    title: { type: String, required: true, default: " " },
    img: { type: String, required: true, default: " " },
    director: { type: String, required: true, default: " " }
});

const UpcomingModel = mongoose.model('Upcoming', UpcomingSchema);

export default UpcomingModel;