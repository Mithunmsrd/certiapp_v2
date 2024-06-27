const { Schema} =require('mongoose');
const { model} =require('mongoose');
const demo = new Schema({
   CertiID: { type: String, required: true },
   CandName: { type: String, required: true },
   CourseName: { type: String, required: true },
   Grade: {type: String, required: true },
   Date: {type: String, required: true}
   // Add other fields as needed
});


const sample = model('sample1', demo);
module.exports= sample;