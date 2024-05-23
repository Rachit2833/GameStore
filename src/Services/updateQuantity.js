import supabase from "../../Supabase";

export async function updateQuantity(data){
console.log(data);
const {  error } = await supabase
  .from("Cart")
  .update({ Quantity: data.Quantity })
  .eq("id", data.id)
  .select();
          
}