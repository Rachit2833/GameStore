import { useMutation, useQueryClient } from "react-query"
import { makeOrder } from "../Services/makeOrder"
import { useGames } from "../Context/GameContext"
import toast from "react-hot-toast"

function useOrders() {
   const queryClient =useQueryClient()
   const games=useGames()
   const { selectedAddress, setSelectedAddress, customerId, CartData }=games
  const {mutate:makeOrderMutate,isLoading:isCreatingOrder} =useMutation({
   mutationFn:(paymentData)=>{
      console.log(paymentData);
        CartData.map((data)=>{
           const orderData = {
              "Address": selectedAddress,
              "CustomerID": data.CustomerID,
              "ProductId": data.ProductId,
              "AmountPaid":"78.00",
              "Quantity": data.Quantity,
              "Status": "Ordered",
              "OrderId": "ABC89R"
           }
           console.log(data);
           console.log(orderData);
        })
    
   },
   onSuccess:()=>{
      toast.success("Order Placed")
      queryClient.invalidateQueries("Orders")
   }
  })
  return {makeOrderMutate,isCreatingOrder}
}

export default useOrders
