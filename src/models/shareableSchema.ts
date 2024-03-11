import mongoose from 'mongoose';

const Schema = mongoose.Schema

const shareableLinkSchema = new Schema({
  s3_url: {
    type: String,
    required: true
  },
  shorten_slug: {
    type: String,
    required: true
  },
  is_pin_protected: {
    type: Boolean,
    default: false
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    default: null
  },
  pin: {
    type: Number,
    default: null,
    length: [6, 'Pin must be less than 6 digits'],
    select: false
  },
  expiry: {
    type: Date,
    default: null
  },
  file_type: {
    type: String,
    default: null
  },
}, {
  timestamps: true
})

shareableLinkSchema.pre('save', async function (next) {
  // at first time we are passing the field therefore, we can say that we are modifying the field
  if (this.isModified('pin')) {
    (this.pin !== null) ? this.is_pin_protected = true : this.is_pin_protected = false
  }
  next()
})

const ShareableLink = mongoose.models.ShareableLink || mongoose.model('ShareableLink', shareableLinkSchema);

export default ShareableLink;
