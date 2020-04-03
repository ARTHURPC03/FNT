import mongoose from 'mongoose'

const NewsSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  friendly_name: {
    type: String,
  },
  short_description: {
    type: String,
  },
  user_posted: {
    type: mongoose.Schema.Types.ObjectId,
  },
  stars: {
    type: Number,
  },
  date_created: {
    type: Date,
  },
  interations_count: {
    type: Number,
  },
  external_link: {
    type: String,
  },
  long_description: {
    type: String,
  },
  media: {
    type: mongoose.Schema.Types.ObjectId,
  },
})

export default NewsSchema
