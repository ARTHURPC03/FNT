import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  nick: {
    type: String,
  },
  email: {
    type: String,
  },
  hash_pass: {
    type: String,
  },
  email_validated: {
    type: Boolean,
  },
  token: {
    type: String,
  },
  name: {
    type: String,
  },
  last_name: {
    type: String,
  },
})

export default UserSchema
