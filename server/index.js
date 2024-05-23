import express from "express";
import Razorpay from "razorpay";
import cors from "cors";
import crypto from "crypto";


const app = express();
const port = process.env.PORT || 3328;
const razorpayKeySecret = "npuW0dSa2bU4YKMNLnX5UxS0";

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
function objectToForm(object) {
  const form = document.createElement("form");

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      const input = document.createElement("input");
      input.setAttribute("type", "hidden"); // Assuming all values are to be hidden
      input.setAttribute("name", key);
      input.setAttribute("value", object[key]);
      form.appendChild(input);
    }
  }

  return form;
}
const razorpay = new Razorpay({
  key_id: "rzp_test_qX1EsMper3NA3e",
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
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =req.body;
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
// app.post("/mail", async function (req, res) {
//   const { Name, From, Phone, Message } = req.body;
//   console.log(Name, From, Phone, Message);
//  const tempParams={
//   from_name:Name,
//   from_email:From,
//   to_name:"GameStore",
//   message:Message

//  }
//  const form =objectToForm(tempParams)
//   try {
//     await emailjs.sendForm("service_zeaj4dm", "template_zf8vqt8", <h1>Hello world</h1>, {
//       publicKey: "user_aOInDpF-_EcA_GfIH",
//     });
//     console.log("SUCCESS!");
//     res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.log("FAILED...", error);
   
//   }
// });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
