import supabase from "../../Supabase";
import { uploadUser } from "./uploadUser";

export async function registerUser(data){

let { data: returnData, error } = await supabase.auth.signUp({
  
  email: data.Email,
  password: data.Passsword,
});
if (error) {
  console.log(error);
}

const abc ={
     EmailAddress: returnData.user.email,
    CustomerID:returnData.user.identities[0].user_id,
     Name:data.FirstName + "" + data.LastName
}
  uploadUser(abc)

  return returnData
}