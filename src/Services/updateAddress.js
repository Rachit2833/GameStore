import supabase from "../../Supabase";

export async function updateAddress(CustomerID,data) {
  const {  error } = await supabase
    .from("Users")
    .update({ SavedAddress: data })
    .eq("CustomerID", CustomerID)
    .select();
}