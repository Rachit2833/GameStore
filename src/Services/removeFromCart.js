import supabase from "../../Supabase";

export async function removeFromCart(data){

const { error } = await supabase
  .from("Cart")
  .delete()
  .eq("id", data.id);

  
}