import mongoose from 'mongoose'

const Schema = mongoose.Schema

const waitlistSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
  }
}, {
  timestamps: true
});

const Waitlist = mongoose.models.Waitlist || mongoose.model('Waitlist', waitlistSchema)

export default Waitlist
