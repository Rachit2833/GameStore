import supabase from "../../Supabase";

export async function getOrders(CustomerID){
let { data: Orders, error } = await supabase
  .from("Orders")
  .select("*,Users(*),Games(*)")
  .eq("CustomerID", CustomerID);

  return Orders
}