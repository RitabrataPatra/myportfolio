import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({    
    name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  githuburl: { type: String, required: true },
  demourl: { type: String, required: true },
  
} , { timestamps: true });

export default mongoose.models.Project || mongoose.model("Project", projectSchema);