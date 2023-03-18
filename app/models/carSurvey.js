import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CarSurveySchema = new Schema({
    question: String,
    answer1: String,
    answer2: String,
    answer3: String,   
    answer4: Number
}, {
    timestamps: true, 
    collection: 'CarSurvey'
});

export default mongoose.model("CarSurvey", CarSurveySchema);