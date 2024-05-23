import { useMutation, useQueryClient } from 'react-query';
import { useGames } from '../Context/GameContext';
import styles from './OrderItem.module.css';
import { updateStatus } from '../Services/updateStatus';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Modal from '../Utils/Modal';
import Review from '../Utils/Review';
import Overlay from '../Home/Overlay';
import Loader from '../Home/Loader';
import toast, { Toaster } from 'react-hot-toast';


function OrderItem({data}) {

    const games =useGames()
    const queryClient =useQueryClient()
    const navigate =useNavigate()
    const[ searchParams ,setSearchParams] = useSearchParams();
    const { rating, setRating, setReviewAddingData, modalOpen, setModalOpen, getDifference, getCurrentFormattedDate, customerId, trackingData, setTrackingtData } = games

  async function  downloadInvoice(){
      // Log the entire data object to see its structure

      const addressx = JSON.parse(data.Address);
     


      
      let Invoicedata = {
          apiKey: "free",
          mode: "development",
          images: {
              // The logo on top of your invoice
              logo: "https://cqjwbomsvthfmlbxdfwh.supabase.co/storage/v1/object/public/Banner%20Iamge/6f6df964a26d2da0d7aa12d3790f1049.jpg?t=2024-04-14T07%3A33%3A59.836Z",
              // The invoice background
              background:
                  "https://cqjwbomsvthfmlbxdfwh.supabase.co/storage/v1/object/public/Banner%20Iamge/6f6df964a26d2da0d7aa12d3790f1049.jpg?t=2024-04-14T07%3A33%3A59.836Z",
          },
          sender: {
              company: "GameStore",
              address: "177A Bleecker Street",
              zip: "NY 10012-1406",
              city: "New York City",
              country: "USA",
          },
          client: {
              company: addressx.name,
              address: `${addressx.apartment} ${addressx.street} ` ,
              road:  addressx.address,
              zip: addressx.zip,
              city: addressx.city,
              country: addressx.country,
              // custom1: "custom value 1",
              // custom2: "custom value 2",
              // custom3: "custom value 3"
          },
          information: {
              // Invoice number
              number: data.OrderId,
              // Invoice data
              date: data.Date,
              
          },
          products: [
              {
                  quantity: data.Quantity,
                  description: data.Games.Name,
                  taxRate: 6,
                  price: data.Games.Price,
              }
             
          ],
          bottomNotice: "Your purchase just made our day! Thanks for choosing us. 🚀",
          settings: {
              currency: "USD",
          }
      };
      
      const result = await easyinvoice.createInvoice(Invoicedata);
      easyinvoice.download('myInvoice.pdf', result.pdf);

  }

   const {mutate:invoiceMutate,isLoading:isLoadingInvoice}= useMutation({
    mutationFn:()=>{

        downloadInvoice()
    },
    onSuccess:()=>{

           toast.success("Download Will Start Shortly")
          
    }
   })
   const {mutate,isLoading}=useMutation({
       mutationFn: (dataStatus)=>{

           updateStatus(data.id,dataStatus)
    },
    
    onSuccess:()=>{
        queryClient.invalidateQueries(["Orders"])
    }

   })
 
 
   const  handleClick = () => {
        // Get current search parameters
        const searchParams = new URLSearchParams();
        searchParams.set("tracking", data.id);
        setSearchParams(searchParams)
        setTrackingtData(data) 
        localStorage.setItem('orderTrackingData', JSON.stringify(data));
        // Update search parameters and navigate to the product page
        // // setProductData(data);
        // localStorage.setItem('productData', JSON.stringify(data));
        navigate(`/timeline?${searchParams.toString()}`);

    }

  console.log(trackingData);
     const splitTime = data?.Date.split("T") 
     const currentDate =getCurrentFormattedDate()
     const splitFormateDate=`${splitTime[0]} ${splitTime[1]}`
       const timeTaken =(-1*getDifference(currentDate,splitFormateDate))
    return (
          <>
          <Toaster />
         {isLoadingInvoice?<Overlay />: null}
        <div style={{margin:"2rem 0"}} className={styles.item}>
            <div className={styles.product}>
                <img src={data?.Games?.ImageUrl} alt="" />
                <div onClick={handleClick} className={styles.extra}>
                    <h2 style={{ fontSize: "2.2rem" }}>{data?.Games?.Name}</h2>
                    <h4 style={{ color: "gray", fontSize: "1.4rem" }}>{data?.Games?.Studio}</h4>
                    <h4 style={{ color: "gray", fontSize: "1.2rem" }}>Order Number:({data?.OrderId})</h4>
                    <h4 style={{ color: "gray", fontSize: "1.2rem" }}>Ref No:{data?.Games?.RefNumber}</h4>

                    {data?.Status === "Cancelled" || data?.Status === "Returned" || (data?.Status === "Delivered" && timeTaken >= 7) ? null : (
                        <button
                        onClick={()=>{
                                mutate(data?.Status === "Ordered" ? "Cancelled" : "Returned")
                        }}
                            style={{ width: "15rem", padding: "1rem 0" }}
                            className={`${styles.btn_ord} ${data?.Status === "Ordered" ? styles.btn_ordered : ''}`}
                        >
                            {data?.Status === "Ordered" ? "Cancel" : "Return"}
                        </button>
                    )}

                </div>
                <h2 style={{ fontSize: "2.2rem" }}>${data?.Games?.Price} * {data?.Quantity}</h2>
                <div>
                    <h2 className={data?.Status === "Ordered" ? styles.royalBlue : data?.Status === "Delivered" ? styles.green : data?.Status === "In Transit" ? styles.lavendar: styles.red} style={{ fontSize: "2.2rem"  }}>{data?.Status}</h2>
                    <h4 className={data?.Status === "Ordered" ? styles.royalBlue : data?.Status === "Delivered" ? styles.green : data?.Status === "In Transit" ? styles.lavendar : styles.red}  style={{ fontSize: "1.4rem" }}>
                        {data?.Status === "Ordered" ? "We are processing your order" : data?.Status === "Delivered" ? "Your Order was safely delivered on 13/09/2034": data?.Status === "In Transit" ? "Your order will reach you soon!" : "You cancelled the order because you changed your mind"} 
                         </h4>
                    <h4 style={{ color: "gray", fontSize: "1.4rem" }}>Express Delivery</h4>
                    <h4 style={{ color: "gray", fontSize: "1.2rem" }}>{data?.Date}</h4>

                </div>
            </div>
           
          {modalOpen ? <Modal children={<Review />} />: null}
            <div className={styles.details}>
                <h4 style={{ color: "#33b249", fontSize: "1.4rem" }}>
                    {data?.Status === "Delivered" ? " Your feedback matters! Share your experience with us by writing a review and help us serve you better in the future." : data?.Status === "Cancelled" ? "You've cancelled this order" : "Thank you for your purchase! We value your feedback. Please take a moment to share your thoughts and experiences by writing a review once you've received the product."}</h4>
                <div style={{ display: "flex", justifyContent: data?.Status === "Delivered" ? "space-between" : "flex-end" }}>
                    {data?.Status === "Delivered" ?<button onClick={()=>{
                        setRating(0)
                        setReviewAddingData(data)
                      setModalOpen(true)
                    }} style={{ padding: "1rem", width: "15rem" }} className={styles.btn_ord}>Give a review</button>:null}
                    <button style={{ padding: "1rem", width: "20rem" }} onClick={()=>{
                        invoiceMutate()
                    }} className={styles.btn_ord}>Download Invoice</button>
                </div>
            </div>
        </div>
 </>

    )
}

export default OrderItem;
