const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRouter = require("./routes/user");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const orderRouter = require("./routes/order");
const cartRouter = require("./routes/cart");
const cors = require("cors");

dotenv.config();

const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Database Connected'))
    .catch(err => console.log(err));

app.listen(port, () => {
    console.log("App is runnning on port " + port + "!");
});

app.use("/orders", orderRouter);
app.use("/cart", cartRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/auth", authRouter);