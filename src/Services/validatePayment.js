async function validatePayment(Paymentresponse){
   try {
    const response = await fetch("http://localhost:5000/order/validate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       ...Paymentresponse
      }),
    });

    const data = await response.json();
    console.log(data);
   }catch(error){
   console.error("Error making payment:", error);
   }
}