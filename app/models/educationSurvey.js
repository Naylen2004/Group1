import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const EducationSurveySchema = new Schema({
    question: String,
    answer1: String,
    answer2: String,
    answer3: String,   
    answer4: Number
}, {
    timestamps: true, 
    collection: 'EducationSurvey'
});

export default mongoose.model("EducationSurvey", EducationSurveySchema);