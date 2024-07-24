import mongoose from 'mongoose';

const releasedProjectSchema = new mongoose.Schema({
    title: { type: String, required: true, default: " " },
    img: { type: String, required: true, default: " " },
    producer: { type: String, required: true, default: " " },
    director: { type: String, required: true, default: " " },
    dop: { type: String, required: true, default: " " },
    link: { type: String, required: true, default: " " }
});

const releasedProjectModel = mongoose.model('ReleasedProject', releasedProjectSchema);

export default releasedProjectModel;