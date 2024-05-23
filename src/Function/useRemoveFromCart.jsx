import { QueryClient, useMutation, useQueryClient } from "react-query";
import { removeFromCart } from "../Services/removeFromCart";
import { updateQuantity } from "../Services/updateQuantity";
import toast from "react-hot-toast";

export function useRemoveToCart(){
    const queryClient =useQueryClient()
    const {mutate:removeCartMutate,isLoading:isRemovingFromCart}=useMutation({
        mutationFn:removeFromCart,
        onSuccess:()=>{
            toast.success("Item Removed")
            queryClient.invalidateQueries("Cart")
        },
        onError:()=>{
            toast.error("Something went wrong")
        }
    })
    return {removeCartMutate,isRemovingFromCart}
}



export function useEditQuantity() {
    const queryClient = useQueryClient();

    const { mutate: quantityMutate,isLoading:isUpdating } = useMutation(
        updateQuantity,
        {
            onSuccess: () => {
                queryClient.invalidateQueries("Cart");
            },
            onError: (error) => {
                console.error("Error updating quantity:", error);
                // Handle error here, like showing an error message to the user
            }
        }
    );

    return { quantityMutate, isUpdating };
}
