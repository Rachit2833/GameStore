import supabase from "../../Supabase";

export async function getUserData(CustomerID) {

  let { data: UserData, error } = await supabase
    .from("Users")
    .select("*")
    .eq("CustomerID", CustomerID);
   
    return UserData
}


