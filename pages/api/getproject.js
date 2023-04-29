import project from "../../models/projects";
import connectdb from "@/middleware/mogoose";

const handler = async (req,res) =>{
    let projects = await project.find()
    res.status(200).json({projects})
}

export default connectdb(handler);