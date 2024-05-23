import supabase from "../../Supabase";

export async function getConsoles(){

let { data: Consoles, error } = await supabase
  .from('Consoles')
  .select('*')
    return Consoles      
}