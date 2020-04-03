import mongoose from 'mongoose'

const MediaSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  content: {
    type: String,
  },
  url: {
    type: String,
  },
  filename: {
    type: String,
  },
})

export default MediaSchema
