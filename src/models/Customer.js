const mongoose = require("mongoose");
const validator = require("validator");
const customerSchema = new mongoose.Schema({
  First_name: {
    type: String,
    required: true,
  },
  Last_name: {
    type: String,
    required: true,
  },
  Sex: {
    type: String,
    required: true,
  },
  DoB: {
    type: Date,
    required: true,
  },
  Email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  Contact: {
    type: Number,
    required: true,
  },
  Date_of_Joining: {
    type: Date,
    default: new Date(),
  },
});

customerSchema.virtual("customer_subscription", {
  ref: "subscriptionModel",
  localField: "_id",
  foreignField: "Customer_Id",
});

module.exports = mongoose.model("customerModel", customerSchema);
