import supabase from "../../Supabase";


 export async function getUser() {
   const { data: session, isLoading } = await supabase.auth.getSession();
   if (!session.session) {
     return null;
   }
   const { data: user, error } = await supabase.auth.getUser();
   return user?.user;
 }