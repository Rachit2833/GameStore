import { useMutation, useQueryClient } from "react-query";
import { addToCart } from "../Services/addtoCart";
import toast from "react-hot-toast";

export function useAddToCard() {
    const queryClient =useQueryClient()
    const { mutate: cartAddMutate, isLoading } = useMutation({
        mutationFn: addToCart,
        // onSuccess and onError can be defined as needed
        onSuccess: () => {
            queryClient.invalidateQueries("Cart")
            toast.success("Item added to cart successfully");
        },
        onError: (error) => {
            toast.error("Error adding item to cart:", error.message);
        }
    });
    return { cartAddMutate, isLoading };
}