const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    projectId:{type:String , require:true},
    title:{type:String, require:true},
    content:{type:String, require:true},
    image:{type:String, require:true},
    category:{type:String, require:true},
    projectLink:{type:String, require:true}

},{timestamps: true});
mongoose.models={}
export default mongoose.model('Project',ProjectSchema);