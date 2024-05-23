import supabase from "../../Supabase";

export async function addToCart(data) {
  try {

    const { error } = await supabase
      .from("Cart")
      .insert([
        {
          CustomerID: data.CustomerId,
          ProductID: data.ProductId,
          Quantity: data.Quantity,
        },
      ])
      .select();

    if (error) {
      throw error;
    }
  } catch (error) {
    console.error("Error adding item to cart:", error.message);
    throw error;
  }
}
