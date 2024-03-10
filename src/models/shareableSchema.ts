import mongoose from 'mongoose';
const Schema = mongoose.Schema

const shareableLinkSchema = new Schema({
  s3_url: {
    type: String,
    required: true,
  },
  shorten_slug: {
    type: String,
    required: true,
  },
  is_password_protected: {
    type: Boolean,
    default: false,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
  },
  expiry: {
    type: Date,
    default: null,
    // required: true,
  },
});

const ShareableLink = mongoose.models.ShareableLink || mongoose.model('ShareableLink', shareableLinkSchema);

export default ShareableLink;
