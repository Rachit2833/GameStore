import supabase from "../../Supabase";

export async function getCartData(CustomerID) {

  let { data: CartData, error } = await supabase
    .from("Cart")
    .select("*  ,Users(*),Games(*) ")
    .eq("CustomerID", CustomerID);

  console.log(CartData);
  return CartData;
}
