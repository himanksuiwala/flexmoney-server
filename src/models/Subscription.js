const mongoose = require("mongoose");
const SubscriptionSchema = new mongoose.Schema({
  Customer_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customerModel",
  },
  Batch_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "batchModel",
  },
  Subscription_strt: {
    type: Date,
  },
  Subscription_valid_till: {
    type: Date,
  },
  Mode_of_payment: {
    type: String,
  },
  Fees: {
    type: Number,
  },
});

module.exports = mongoose.model("subscriptionModel", SubscriptionSchema);
