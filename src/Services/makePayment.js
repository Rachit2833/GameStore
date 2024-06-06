import useOrders from "../Function/useOrders";
import easyinvoice from "easyinvoice";
import fs from "fs"




const apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxandib21zdnRoZm1sYnhkZndoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwNzk4OTgsImV4cCI6MjAyMzY1NTg5OH0.beR2H7hLUZzEchCH9uK5dTk6_f6TFHRIXJYO-4cvcvc";
const supabaseUrl = "https://cqjwbomsvthfmlbxdfwh.supabase.co";
const Tracking = JSON.stringify({
  details: "Some information here",
  date: new Date("2024-03-26"),
});


export async function makePayment(Fndata, CustomerID) {

  try {
    console.log(Fndata.Total);
    console.log(Fndata.Address);

    const response = await fetch("http://localhost:3328/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: parseInt(Fndata.Total * 100),
        currency: "INR",
        receipt: "qwsaq87",
      }),
    });

    const data = await response.json();
    console.log(data);
    console.log(response, { ...response });

    var options = {
      key: "rzp_test_qX1EsMper3NA3e",
      currency: "INR",
      name: "Game Store",
      description: "Test Transaction",
      image: "images/6f6df964a26d2da0d7aa12d3790f1049.jpg",
      order_id: data.id,
      handler: async function (response) {
        const body = { ...response };
        try {
          const validateRes = await fetch("http://localhost:3328/validate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          });

          if (validateRes.ok) {
            try {
              const responseCart = await fetch(
                `${supabaseUrl}/rest/v1/Cart?apikey=${apikey}&CustomerID=eq.${CustomerID}`,
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );
              const cartData = await responseCart.json();
              console.log("Cart data:", cartData);

              const orderPromises = cartData.map(async (data) => {
                const orderData = {
                  "CustomerID": data.CustomerID,
                  "ProductId": data.ProductID,
                  "AmountPaid": Fndata.Total,
                  "Status": "Ordered",
                  "OrderId": body.razorpay_order_id,
                  "Address": Fndata.Address,
                  "Quantity": parseInt(data.Quantity),
                  "   PaymentId": body.razorpay_payment_id,
                  "Tracking":[Tracking]
                };

                console.log(orderData, "hbhjn jknj");
                try {
                  const orderResponse = await fetch(
                    `${supabaseUrl}/rest/v1/Orders?apikey=${apikey}`,

                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(orderData),
                    }
                  );

                  if (orderResponse.ok) {
                    console.log("Order placed successfully:", orderData);
                    return orderResponse;
                  } else {
                    console.error(
                      "Failed to place order:",
                      orderResponse.statusText
                    );
                  }
                } catch (error) {
                  console.error("Error placing order:", error);
                }
              });

              await Promise.all(orderPromises);
            } catch (error) {
              console.error("Error fetching cart data:", error);
            }
          }
        } catch (error) {
          console.error("Error validating response:", error);
        }
      },
      config: {
        display: {
          blocks: {
            utib: {
              name: "Pay using Axis Bank",
              instruments: [
                {
                  method: "card",
                  issuers: ["UTIB"],
                },
                {
                  method: "netbanking",
                  banks: ["UTIB"],
                },
              ],
            },
            other: {
              name: "Other Payment modes",
              instruments: [
                {
                  method: "card",
                  issuers: ["ICIC"],
                },
                {
                  method: "netbanking",
                },
              ],
            },
          },
        },
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
  } catch (error) {
    console.error("Error making payment:", error);
    throw error;
  }
}
