import mongoose from 'mongoose';

const FutureSchema = new mongoose.Schema({
    title: { type: String, required: true, default: " " },
    img: { type: String, required: true, default: " " },
    director: { type: String, required: true, default: " " }
});

const FutureModel = mongoose.model('Future', FutureSchema);

export default FutureModel;