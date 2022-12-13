const mongoose = require("mongoose");

const batchSchema = new mongoose.Schema({
  Batch_name: {
    type: String,
    required: true,
  },
  Strt_time: {
    type: Number,
    required: true,
  },
  End_time: {
    type: Number,
    required: true,
  },
  Instructor_name: {
    type: String,
    required: true,
  },
});
batchSchema.virtual("subscribed_batches", {
  ref: "subscriptionModel",
  localField: "_id",
  foreignField: "Batch_Id",
});

module.exports = mongoose.model("batchModel", batchSchema);
