import { useState, useRef, useEffect } from "react"
import { useGames } from "../Context/GameContext"
import "./Product.css"
import { deleteReview, editReview } from "../Function/useReviews"
import Loader from "../Home/Loader"
import Star from "../Utils/Star"

function Review({ children, data }) {
    const [isEditToggle, setIsEditToggle] = useState(false)
    const [reviewComment, setReviewComment] = useState(data.Description)
    const { editReviewMutate, isEdtingReview } =editReview()
    const { deleteReviewMutate ,isdeletingReview } =deleteReview()
    const textAreaRef = useRef(null);
    const games = useGames();
    const { customerId, hovered, setHovered, rating, setRating } = games;
    function handleSave(){
        setIsEditToggle(false)
        const Newdata ={
            "id":data.id,
            "des":reviewComment,
            "rating":rating
        }
        editReviewMutate(Newdata)
    }

    useEffect(() => {
        if (isEditToggle && textAreaRef.current) {
            textAreaRef.current.focus();
            textAreaRef.current.selectionStart = textAreaRef.current.selectionEnd = textAreaRef.current.value.length;
        }
    }, [isEditToggle]);

    return (
        <>
        {isEdtingReview || isdeletingReview ?<Loader />:null}
        <div className="review-wrap">
            <div className="user-review">
               <div className="sep">
                        <img className='user-img-review' src={data?.Users?.ImageURL} alt="" />
                        <span className='user-name-review'>{data.CustomerId === customerId ? "You" : data?.Users?.Name}</span>
                        {isEditToggle ?<Star />: <samp className='user-name-review star-icon'>{Array.from({ length: 5 }, (_, index) => {
                            return index < data.rating ? "⭐️" : null;
                        })}</samp>}

                        {children}
               </div>
                {data.CustomerId === customerId && !isEditToggle ? (
       
                            <button className="edit-btn" onClick={() => setIsEditToggle(true)}>
                                <span className="edit"><ion-icon name="create-outline" /></span>
                            </button>
                          
                  
                ) : null}
            </div>
            {isEditToggle ? (
                <>
                    <textarea
                        ref={textAreaRef}
                        className="text-area"
                        value={reviewComment}
                        cols="125"
                        rows="10"
                        onChange={(e) =>setReviewComment(e.target.value) }
                        />
                    <button className="save-btn" onClick={handleSave}>Save</button>
                </>
            ) : (
                 <div className="sep-des">
                <p className='review-des'><i>{reviewComment}</i></p>

                            {data.CustomerId === customerId && !isEditToggle ?<button className="edit-btn" onClick={() => deleteReviewMutate(data.id)}>
                                <span className="edit"><ion-icon name="trash-outline" /></span>
                            </button>:null}
                </div>
                )}
        </div>
                </>
    )
}

export default Review
