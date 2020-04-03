import mongoose from 'mongoose'

const CommentSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  content: {
    type: String,
  },
  user_posted: {
    type: mongoose.Schema.Types.ObjectId,
  },
  date_created: {
    type: Date,
  },
  points: {
    type: Number,
  },
  total_up_points: {
    type: Number,
  },
  total_down_points: {
    type: Number,
  },
  post_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  type: {
    type: String,
  },
  media: {
    type: mongoose.Schema.Types.ObjectId,
  },
})

export default CommentSchema
