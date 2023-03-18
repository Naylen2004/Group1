import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const DietSurveySchema = new Schema({
    question: String,
    answer1: String,
    answer2: String,
    answer3: String,   
    answer4: Number
}, {
    timestamps: true, 
    collection: 'DietSurvey'
});

export default mongoose.model("DietSurvey", DietSurveySchema);