import supabase from "../../Supabase";

export async function useLogout(){

   let { error } = await supabase.auth.signOut();

if(error){
      return error;
}

}
