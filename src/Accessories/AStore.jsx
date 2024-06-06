import { useState } from 'react'
import { useGames } from '../Context/GameContext'
import Footer from '../Home/Footer'
import Navbar from '../Home/Navbar'
import GameStore from '../Store/Game-store'
import styles from './AStore.module.css'
import Heading from '../Store/Heading'
import SecondaryBanner from '../Store/SecondaryBanner'
function AStore() {
   const games =useGames()
   const { AccUser, isAccLoading } =games
   const [Index, setIndex]=useState(4)
   const bannerData1={
      head: "RAZER BLACKSHARK V2 HYPERSPEED",
      des: "Our Razer Seiren microphones are engineered to give you the very best voice clarity and function no matter your preference.Tested and tweaked in live streaming environments, we've got a model to amplify every type of voice—whether you’re new to broadcasting or an industry vet."
   }
   console.log(AccUser); // Print the contents of AccUser array
   const AccUserRazor = AccUser.filter((data) => {
      return data.Name.split("-")[0] === "Razer BlackShark V2 HyperSpeed ";
   });
   console.log(AccUserRazor); // Print the filtered array


   function scrollDownAndUp(position) {
      window.scrollTo({
         top: position,
         behavior: 'smooth'
      });
   }
   return (
     <>
         <div className="nav-wrap">
            <Navbar />
         </div>
         <div className="abc">
           <div className={styles.main_conatiner}>
               <div className={styles.banner}>
                  <h2 className={styles.head_banner}>
                     Maximize gaming with G102: LIGHTSYNC, precision sensor, 6-button design, illumination.</h2>
                     <button className={styles.banner_button} onClick={()=>scrollDownAndUp(800)}>Shop Now</button>
                   </div>
               <div className={styles.grid2}>
                  <div className={styles.banner1}> </div>
                  <div className={styles.banner2}> </div>
               </div>
           </div>

            <Heading heading={"Shop Logitech G102"} />

            <div class="Store-games-rec">
              {AccUser?.map((data ,index)=>{
                      if(index<4){
                         return <GameStore data={data} />
                      }
                      
              })}

            </div>
            <SecondaryBanner align={"center"} color={"white"} image={"/images/razer-blackshark-v2-hyperspeed-battery-life-desktop.webp"} data={bannerData1} handelClick={()=>scrollDownAndUp(1800)}/>
            <Heading heading={" Latest RAZER BLACKSHARK V2 HYPERSPEED"} />

            <div style={{ position: "relative", display: "flex", justifyContent: "center", boxSizing: "border-box", }} class="Store-games-rec">
               {AccUserRazor?.map((data, index) => {
                  if (index <4) {
                     return <GameStore data={data} />
                  }

               })}

            </div>
            <Heading heading={"Fatest Gaming Displays "} />
            <div style={{ position: "relative", display: "flex", justifyContent: "center", boxSizing: "border-box", }} class="Store-games-rec">
               {AccUser?.map((data, index) => {
                  if (index > 15) {
                     return <GameStore data={data} />
                  }

               })}

            </div>
            
         </div>
         <div className="foot-wrap">
            <Footer/>
         </div>
     </>
   )
}

export default AStore
