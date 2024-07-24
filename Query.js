import mongoose from 'mongoose';

const QuerySchema = new mongoose.Schema({
    name: { type: String, required: true, default: " " },
    whatapp: { type: String, required: true, default: " " },
    email: { type: String, required: true, default: " " },
    message: { type: String, required: true, default: " " }
});

const QueryModel = mongoose.model('Query', QuerySchema);

export default QueryModel;