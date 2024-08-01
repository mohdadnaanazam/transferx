import mongoose from 'mongoose'

const Schema = mongoose.Schema

const snipSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  alias: {
    type: String,
    required: true
  },
  shorten_slug: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const SnipLink = mongoose.models.SnipLink || mongoose.model('SnipLink', snipSchema)

export default SnipLink
