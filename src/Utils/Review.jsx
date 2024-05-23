import React, { useState } from 'react';
import styles from './Review.module.css';
import { useGames } from '../Context/GameContext';
import { Form, useForm } from 'react-hook-form';
import Patch from '../Product/Patch';
import { useMutation } from 'react-query';
import { addReview } from '../Services/addReview';
import Star from './Star';

function Review() {

   const { handleSubmit, register, reset } = useForm();
   const games =useGames()
   const { reviewAddingData, setReviewAddingData, modalOpen, setModalOpen, } =games
  console.log(reviewAddingData,"rd");
  
   const [specialTags, setSpecialTags] = useState("");


 
   function onSubmit(data){

  if(rating){
     mutate(data)
  }else{
     alert("Ohh you forgot the stars ⭐️")
  }
   }
   function onCancel(){
      reset()
      setRating()
   }


   const {mutate,isLoading} =useMutation({
      mutationFn:(data)=>{
         let CustomerId = reviewAddingData.CustomerID
         let ProductId = reviewAddingData.ProductId
         console.log(CustomerId,ProductId);
 
         addReview({ ...data, rating, CustomerId, ProductId,SpecialTags:specialTags})
      }
   })
    return (
      <form onSubmit={handleSubmit(onSubmit )}>
      <div className={styles.container}>

         <h1>ADD A REVIEW</h1>
         <span className={styles.cross} onClick={()=>{
            setModalOpen(false)
         }}>
            <ion-icon name="close-outline"></ion-icon>
         </span>
         <Star />
         <p>Share your review:</p>
            <p>Your feedback matters! Share your experience with us by writing a review and help us serve you better in the future.</p>
      <div className={styles.main_patch}>
               
               <input className={styles.input} onChange={(e) => {
                  console.log(e.target.value);
                  setSpecialTags(e.target.value)
               }} placeholder='One Word Description' maxLength={15} style={{ border: "1px solid #ccc" }} type="text" />
               <div style={{margin:"2rem"}}>
                  {specialTags ? <Patch data={specialTags} /> : null}
    
               </div>
      </div>
             <textarea id="review" placeholder="Write your review here" rows={8}{...register("Description",{
            required:"This field is required"
         })} ></textarea>
         <div className={styles.btn_div}>
               <button className={styles.button }>Submit</button>
               <button className={styles.button } onClick={()=>onCancel()}>Cancel</button>
         </div>
         <div className={styles.reviews} id="reviews">

         </div>
      </div>
      </form>
   );
}

export default Review;
