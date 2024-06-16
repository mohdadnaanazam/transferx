import mongoose from 'mongoose'
import { TypeEnum } from '@/enums/enum';

const Schema = mongoose.Schema

const waitlistSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
  },
  type: {
    type: String,
    required: true,
    enum: TypeEnum
  }
},
{
  timestamps: true
})

const Waitlist = mongoose.models.Waitlist || mongoose.model('Waitlist', waitlistSchema)

export default Waitlist
