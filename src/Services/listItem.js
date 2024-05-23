import supabase from "../../Supabase";
import { uploadPoster } from "./uploadPoster";

export async function listItem(data){
console.log(data);
const { error } = await supabase
  .from("Games")
  .insert({
    ...data,
    ImageUrl: `https://cqjwbomsvthfmlbxdfwh.supabase.co/storage/v1/object/public/images/${data.ImageUrl[0].name}`,
    Trailer: `https://cqjwbomsvthfmlbxdfwh.supabase.co/storage/v1/object/public/Trailers/${data.Trailer[0].name}`,
  })
  .select();
  if(!error){
           uploadPoster(data.ImageUrl,"images")
         uploadPoster(data.Trailer,"Trailers")
  }
          
}