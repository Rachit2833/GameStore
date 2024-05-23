import supabase from "../../Supabase";

export async function makeOrder(){

const { data, error } = await supabase
  .from("Orders")
  .insert([{ some_column: "someValue", other_column: "otherValue" }])
  .select();
          
}