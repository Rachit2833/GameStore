import { useMutation, useQueryClient } from "react-query"
import { updateReview } from "../Services/updateReview"
import { deleteUserReview } from "../Services/deleteReview"

export function editReview(){
    const queryClient=useQueryClient()
    const {mutate:editReviewMutate,isLoading:isEdtingReview} =useMutation({
       mutationFn:updateReview,
       onSuccess:()=>{
           queryClient.invalidateQueries("Reviews")
       },
       onError:()=>{

       }

    })
    return{editReviewMutate,isEdtingReview}
}
export function deleteReview() {
    const queryClient =useQueryClient()
    const { mutate: deleteReviewMutate, isLoading: isdeletingReview } = useMutation({
        mutationFn: deleteUserReview,
        onSuccess: () => {
            queryClient.invalidateQueries("Reviews")
        },
        onError: () => {

        }

    })
    return { deleteReviewMutate, isdeletingReview }
}
