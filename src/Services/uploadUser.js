import supabase from "../../Supabase";

export async function uploadUser(data){

const {  error } = await supabase
  .from("Users")
  .insert([data])
  .select();
          
}