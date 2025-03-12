import mongoose, {Schema} from "mongoose";

const TopicSchema = new Schema(
    {
        title: String, 
        description: String, 
    
    }, {
        timestamps: true
    }
)

const Topic = mongoose.models.Topics ||  mongoose.model("Topics", TopicSchema)

export default Topic;