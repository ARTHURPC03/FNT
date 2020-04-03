import mongoose from 'mongoose'

const PointsSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  total_stars_interaction: {
    type: Number,
  },
  total_stars_interaction: {
    type: Number,
  },
  week_stars_interaction: {
    type: Number,
  },
  total_points_interaction: {
    type: Number,
  },
  total_points_interaction: {
    type: Number,
  },
  total_ref_interaction: {
    type: Number,
  },
  total_social_interaction: {
    type: Number,
  },
  total_social_interaction: {
    type: Number,
  },
})

export default PointsSchema
