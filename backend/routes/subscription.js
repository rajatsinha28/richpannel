const router = require("express").Router();
const Subscription = require("../models/Subscription");

router.post("/plan:id", async (req, res) => {
    try {
        const plan = new Subscription({
            plan: req.body.plan,
            plantype: req.body.plantype,
            userId: req.params.id
        });

        const result = await plan.save();
        res.status(201).send(result);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get("/currentplan:id", async (req, res) => {
    try {
        const currentplan = await Subscription.find({ userId: req.params.id });
        res.status(200).send(currentplan);
    } catch (error) {
        res.status(404).send(error);
    }
});

module.exports = router;