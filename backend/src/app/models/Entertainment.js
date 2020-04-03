import mongoose from 'mongoose'

const EntertainmentSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  user_posted: {
    type: mongoose.Schema.Types.ObjectId,
  },
  external_links: {
    type: [String],
  },
  category: {
    type: [String],
  },
  description: {
    type: String,
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
  interation_count: {
    type: Number,
  },
  media: {
    type: mongoose.Schema.Types.ObjectId,
  },
})

export default EntertainmentSchema
