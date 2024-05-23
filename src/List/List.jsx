import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import "./list.css";
import { useMutation } from 'react-query';
import { listItem } from '../Services/listItem';
import toast, { Toaster } from 'react-hot-toast';
import { uploadPoster } from '../Services/uploadPoster';


function List() {

   const { register, handleSubmit, setValue, getValues } = useForm();
   const { mutate, isLoading } = useMutation({
      mutationFn: (data) => {
         listItem(data)
      },
      onSuccess: () => {
  
         toast.success("Success")
      },
      onError: () => {
         toast.error("Something went wrong")
      }
   })




  

   const onSubmit = (data) => {
      // Handle form submission
      console.log("Form data:", data);
      mutate(data)
   };

   return (
      <>
         <Toaster />
         <div className="nav-wrap">
            <Navbar />
         </div>
         <div className="abc">
            <div className="modal">
               <form className="form" onSubmit={handleSubmit(onSubmit)}>
                  <div className="credit-card-info--form">
                     <div className="input_container">
                        <label htmlFor="name_field" className="input_label">Name</label>
                        <input {...register("Name")} id="name_field" className="input_field" type="text" placeholder="Enter the product name" />
                     </div>
                     <div className="input_container">
                        <label htmlFor="studio_field" className="input_label">Studio</label>
                        <input {...register("Studio")} id="studio_field" className="input_field" type="text" placeholder="Enter the studio or brand name" />
                     </div>
                     <div className="input_container">
                        <label htmlFor="description_field" className="input_label">Description</label>
                        <textarea {...register("Description")} id="description_field" className="input_field" rows={5} placeholder="Enter the product description" />
                     </div>
                     <div className="input_container">
                        <label htmlFor="release_date_field" className="input_label">Release Date</label>
                        <input {...register("ReleaseDate")} id="release_date_field" className="input_field" type="date" />
                     </div>
                     <div className="input_container">
                        <label htmlFor="age_rating_field" className="input_label">Age Rating</label>
                        <input {...register("AgeRating")} id="age_rating_field" className="input_field" type="number" placeholder="Enter the age rating" />
                     </div>
                     <div className="input_container">
                        <label htmlFor="price_field" className="input_label">Price</label>
                        <input {...register("Price")} id="price_field" className="input_field" type="number" placeholder="Enter the product price" />
                     </div>
                     <div className="input_container">
                        <label htmlFor="category_field" className="input_label">Category</label>
                        <input {...register("Category")} id="category_field" className="input_field" type="text" placeholder="Enter the product category" />
                     </div>
                     <div className="input_container">
                        <label htmlFor="device_field" className="input_label">DeviceSupport</label>
                        <input {...register("DeviceSupport")} id="device_field" className="input_field" type="text" placeholder="Enter the supported device" />
                     </div>
                     <div className="input_container">
                        <label htmlFor="editor_pick_field" className="input_label">Editor's Pick</label>
                        <select {...register("EditorPick")} id="editor_pick_field" className="input_field">
                           <option value="true">True</option>
                           <option value="false">False</option>
                        </select>
                     </div>
                     <div className="input_container">
                        <label htmlFor="discount_field" className="input_label">Discount</label>
                        <input {...register("Discount")} id="discount_field" className="input_field" type="number" placeholder="Enter the discount amount" />
                     </div>
                     <div className="input_container">
                        <label htmlFor="delivery_type_field" className="input_label">Delivery Type</label>
                        <input {...register("DeliveryType")} id="delivery_type_field" className="input_field" type="text" placeholder="Enter the delivery type" />
                     </div>
                     <div className="input_container">
                        <label htmlFor="image_field" className="input_label">Poster Image</label>
                        <input {...register("ImageUrl")} id="image_field" className="input_field" type="file" />
                     </div>
                     <div className="input_container">
                        <label htmlFor="trailer_field" className="input_label">Trailer</label>
                        <input {...register("Trailer")} id="trailer_field" className="input_field" type="file" />
                     </div>
                     <div className="input_container">
                        <label htmlFor="bundle_type_field" className="input_label">Bundle Type</label>
                        <input {...register("BundleType")} id="bundle_type_field" className="input_field" type="text" placeholder="Enter the bundle type" />
                     </div>
                     <div className="input_container">
                        <label htmlFor="ref_number_field" className="input_label">Ref Number</label>
                        <input {...register("RefNumber")} id="ref_number_field" className="input_field" type="text" placeholder="Enter the reference number" />
                     </div>
                     <button type="submit" className="purchase--btn">Save</button>
                  </div>
               </form>
            </div>
         </div>
         <div className="foot-wrap">
            <Footer />
         </div>
      </>
   );
}

export default List;
