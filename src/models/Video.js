import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  hashtags: [{ type: String }],
  mata: {
    views: Number,
    rating: Number,
  },
});

const Babo = mongoose.model("Video", videoSchema);
export default Babo;
