import express from "express";
import Razorpay from "razorpay";
import cors from "cors";
import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 3328;

const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;
const key_id = process.env.KEY_ID;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

const razorpay = new Razorpay({
  key_id: key_id,
  key_secret: razorpayKeySecret,
});

app.post("/order", async (req, res) => {
  try {
    const options = req.body;
    const order = await razorpay.orders.create(options);
    if (!order) {
      return res.status(500).json({ error: "Failed to create order" });
    }
    res.json(order);
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post("/validate", async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;
    const text = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac("sha256", razorpayKeySecret)
      .update(text)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      return res.status(400).json({ msg: "Failed transaction" });
    }
    res.json({
      msg: "Payment successful",
      razorpay_order_id,
      razorpay_payment_id,
    });
  } catch (error) {
    console.error("Error validating payment:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
