import supabase from "../../Supabase";

export async function getBannerStoreData(){

let { data: Banner_Store, error } = await supabase
  .from('Banner Store')
  .select('*')
   console.log(Banner_Store);
   return Banner_Store
}