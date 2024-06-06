import supabase from "../../Supabase";


//  export async function getSession() {
//    const { data: session, isLoading } = await supabase.auth.getSession();
//    if (!session.session) {
//      return null;
//    }
//    const { data: user, error } = await supabase.auth.getUser();
//    return user?.user;
//  }

 export async function getSession() {
   const { data: session } = await supabase.auth.getSession();
   if (!session.session) {
     return null;
   }
   const { data, error } = await supabase.auth.getUser();
   return data?.user;
 }