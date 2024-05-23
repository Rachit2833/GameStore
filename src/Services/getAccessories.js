import supabase from "../../Supabase";

export async function getAccessories(){

let { data: Accessories, error } = await supabase
  .from("Accessories")
  .select("*");
  return Accessories 
}