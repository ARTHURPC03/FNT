import mongoose from 'mongoose'

const ReferenceSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  user_posted: {
    type: mongoose.Schema.Types.ObjectId,
  },
  news_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  type: {
    type: String,
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
  description: {
    type: String,
  },
  post_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  description: {
    type: String,
  },
  date_created: {
    type: Date,
  },
  media: {
    type: mongoose.Schema.Types.ObjectId,
  },
})

export default ReferenceSchema
