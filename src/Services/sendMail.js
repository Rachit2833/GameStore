export async function sendMail(data){

   try {
      console.log(data);
        const response = await fetch("http://localhost:3328/mail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
              Name: data.Name,
              From: data.Email,
              Phone: data.Phone,
              Message: data.Message,
            
          }),
        });
   } catch (error) {
      console.error(error);
   }
}