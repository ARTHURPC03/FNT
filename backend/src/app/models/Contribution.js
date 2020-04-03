import mongoose from 'mongoose'

const ContributionSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  user_contributed: {
    type: mongoose.Schema.Types.ObjectId,
  },
  date: {
    type: Date,
  },
  type: {
    type: String,
  },
  type_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
})

export default ContributionSchema
