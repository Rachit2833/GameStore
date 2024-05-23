import supabase from "../../Supabase";

export async function updateReview(data){

const {  error } = await supabase
  .from("Reviews")
  .update({ Description:data.des,rating:data.rating})
  .eq("id", data.id)
  .select();
          
}