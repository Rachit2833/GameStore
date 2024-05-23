import supabase from "../../Supabase";

export async function getUserGames(){
try {

   let { data: Games, error } = await supabase.from("Games").select("*");
   console.log(Games);
   return Games

} catch (error) {
   console.error(error.message)
}     
console.log("Hello 3");
}