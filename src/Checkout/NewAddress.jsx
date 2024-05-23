import { Form, useForm } from "react-hook-form";
import { useGames } from "../Context/GameContext";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import styles from './NewAddress.module.css';
import SavedAddress from "./SavedAddress";
import { useMutation, useQueryClient } from "react-query";
import { updateAddress } from "../Services/updateAddress";

function NewAddress() {
   const games = useGames();
   const { selectedAddress, setSelectedAddress, customerId, userData, isLoadingUserData, selectedAddressData, setSelectedAddressData } = games;
   const { handleSubmit, register,reset } = useForm();
   const queryClient =useQueryClient()
   const { mutate, isLoading } = useMutation({
      mutationFn: (data) => {
         updateAddress(customerId, data);
      },
      onSuccess: () => {
         queryClient.invalidateQueries(["UserData"])
      }
   });

   function onSubmit(data) {
      let updatedUserData
      const newAddressData = JSON.stringify(data); // Convert form data to JSON string
      if (userData[0]?.SavedAddress===null){
         updatedUserData = [...[], newAddressData];
      }else{
          updatedUserData = [...userData[0]?.SavedAddress, newAddressData];
      }
    
      mutate(updatedUserData);
   }
   function deleteAddress(selectedData) {
      const filteredAddresses = userData[0].SavedAddress.filter((data) => {
         const parsedData = JSON.parse(data);
         return JSON.stringify(selectedData) !== JSON.stringify(parsedData);
      });
       mutate(filteredAddresses)
   }




   return (
      <>
         <div className="nav-wrap">
            <Navbar />
         </div>
         <div className="abc">
            <h2 className={styles.head_form}>Add New Shipping Address</h2>
            <div className={styles.form_page}>
               <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={styles.addForm}>
                     <input className={styles.input} type="text" placeholder="Name" {...register("name", { required: true })} />

                     <input className={styles.input} type="text" placeholder="Street" {...register("street", { required: true })} />

                     <input className={styles.input} type="text" placeholder="Apartment/House Number" {...register("apartment", { required: true })} />

                     <input className={styles.input} type="text" placeholder="Phone Number" {...register("contact_number", { required: true })} />

                     <input className={styles.input} type="text" placeholder="City" {...register("city", { required: true })} />

                     <input className={styles.input} type="text" placeholder="Pincode" {...register("zip", { required: true })} />

                     <textarea className={styles.input} placeholder="Address" {...register("address", { required: true })} />

                     <input className={styles.input} type="text" placeholder="Country" {...register("country", { required: true })} />

                     <input className={styles.input} type="text" placeholder="State" {...register("state", { required: true })} />

                     <div className={styles.button_Div}>
                        <button className={styles.button} style={{ backgroundColor: "lightgrey" }} onClick={()=>{
                           reset()
                        }}>Cancel</button>
                        <button type="submit" className={styles.button} style={{ backgroundColor: "#33b249" }}>Save</button>
                     </div>
                  </div>
               </form>
               <div className={styles.org}>
                  <h2 style={{textAlign:'center'}}>Your Saved Address</h2>
                  {userData[0]?.SavedAddress?.length>0?userData[0]?.SavedAddress?.map((data, index) => {
                     const newData = JSON.parse(data);
                     console.log(newData);
                     return (
                        <address key={index} style={{position:"relative"}}>
                           <h2>{newData.name}</h2>
                           <p>{newData.street}, {newData.apartment}</p>
                           <p>{newData.contact_number}</p>
                           <p>{newData.city}, {newData.state}, {newData.zip}</p>
                           <p>{newData.country}</p>
                           <button className={styles.delbutton} style={{ position: "absolute", fontSize: "1.6rem",top:"0",right:"0",padding:"1rem",border:"0",borderRadius:"50%"}} onClick={()=>{
                              deleteAddress(newData)
                           }}><ion-icon name="trash-outline"></ion-icon></button>
                        </address>
                     );
                  }):<h1 style={{ textAlign: "center", fontSize: "2rem" }}>Oops! No shipping address.</h1>}
               </div>
            </div>
         </div>
         <div className="foot-wrap">
            <Footer />
         </div>
      </>
   );
}

export default NewAddress;
