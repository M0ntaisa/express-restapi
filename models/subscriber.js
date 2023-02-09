import { Schema, model } from 'mongoose';

const subscriberSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  subscribedToChannel: {
    type: String,
    required: true
  },
  subscriberDate: {
    type: Date,
    require: true,
    default: Date.now
  }
})

export default model('Subscriber', subscriberSchema)