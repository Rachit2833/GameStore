import supabase from "../../Supabase";

export async function useLogin(Data) {
  try {
    console.log(Data);
    let { data, error } = await supabase.auth.signInWithPassword({
      email: Data.Email,
      password: Data.Password,
    });

    if (error) {
      console.error("Login error:", error.message);
      throw new Error("Login failed");
    }

    console.log(data);
    return data;
  } catch (error) {
    console.error("Login error:", error.message);
    throw new Error("Login failed");
  }
}
