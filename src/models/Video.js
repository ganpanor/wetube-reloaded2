import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLength: 100 },
  description: { type: String, required: true, trim: true },
  createdAt: { type: Date, required: true, default: Date.now, trim: true },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 1, required: true },
    rating: { type: Number, default: 0, required: true },
  },
});

videoSchema.static("formatHashtags", function (hashtags) {
  return hashtags
    .split(",")
    .map((word) => (word.startsWith("#") ? word : `#${word}`));
});

const Video = mongoose.model("Video", videoSchema);
export default Video;