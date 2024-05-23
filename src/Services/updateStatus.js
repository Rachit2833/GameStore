import supabase from "../../Supabase";

export async function updateStatus(id,data) {
  console.log(id,data);
  const {  error } = await supabase
    .from("Orders")
    .update({ Status: data })
    .eq("id", id)
    .select();
}