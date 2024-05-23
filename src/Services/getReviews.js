import supabase from "../../Supabase";

export async function getReviews(productId){
let { data: Reviews, error } = await supabase
  .from("Reviews")
  .select("*,Users(*),Games(*)")
  .eq("ProductId",productId);
            return Reviews
}