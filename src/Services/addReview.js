import supabase from "../../Supabase";

export async function addReview(data){
console.log(data);
const {  error } = await supabase
  .from("Reviews")
  .insert([data])
  .select();
          
}