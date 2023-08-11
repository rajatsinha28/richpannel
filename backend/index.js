const express = require("express");
const app = express();
require("./db/db.js");
const userRoute = require("./routes/user");
const subscriptionRoute = require("./routes/subscription");

const port = process.env.PORT || 8000;

app.use(express.json());
app.use("/user", userRoute);
app.use("/subscription", subscriptionRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});