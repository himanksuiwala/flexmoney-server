const express = require("express");
const customRouteHandler = express.Router();
const Customer = require("../models/Customer");
const Batch = require("../models/Batch");
const Subscription = require("../models/Subscription");

//Saves a new Subscription as requested by User
customRouteHandler.post("/subscribe", async (req, res) => {
  const newSubscription = new Subscription({
    ...req.body,
  });
  try {
    await newSubscription.save();
    res.status(201).send(newSubscription);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//Adds a new batch onto system
customRouteHandler.post("/addBatch", async (req, res) => {
  const newBatch = new Batch({
    ...req.body,
  });
  try {
    await newBatch.save();
    res.status(201).send(newBatch);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//Check for Existing User
customRouteHandler.get("/findUser", async (req, res) => {
  const user = req.query.userId;
  try {
    const userExists = await Customer.exists({ Email: user });
    if (userExists) res.status(201).send(userExists);
    else res.status(210).send("Does not exists");
  } catch (error) {
    res.status(401).send(error.message);
  }
});

//Registers a user
customRouteHandler.post("/registerUser", async (req, res) => {
  const newCustomer = new Customer({
    ...req.body,
  });

  try {
    await newCustomer.save();
    res.status(201).send(newCustomer);
  } catch (error) {
    res.status(401).send(error.message);
  }
});
module.exports = customRouteHandler;
