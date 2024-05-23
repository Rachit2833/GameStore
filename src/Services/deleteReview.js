import supabase from "../../Supabase";

export async function deleteUserReview(data){

const { error } = await supabase
  .from("Reviews")
  .delete()
  .eq("id", data);
          
}