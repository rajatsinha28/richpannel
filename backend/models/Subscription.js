const mongoose = require("mongoose");

const SubscriptionSchema = new mongoose.Schema({
    plan: {
        type: String,
        required: true
    },
    plantype: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true,
        unique: true
    }
});

const collection = new mongoose.model("Subscription", SubscriptionSchema);

module.exports = collection;