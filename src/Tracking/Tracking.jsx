import { useNavigate, useSearchParams } from "react-router-dom"
import Footer from "../Home/Footer"
import Navbar from "../Home/Navbar"
import Timeline from "../Timeline/Timeline"
import { useEffect } from "react"
import OrderItem from "../Orders/OrderItem"
import { useGames } from "../Context/GameContext"
function Tracking() {
    const [searchParams] =useSearchParams()
    const navigate =useNavigate()
    const games=useGames()

   const abc = searchParams.get("tracking")

   useEffect(()=>{
      if(!abc){
         navigate("/store")
      }
   })
 
   return (
      <>
         <div className="nav-wrap">
            <Navbar />
         </div>
         <div className="abc"> 
                          <Timeline />
           
         </div>
         <div className="foot-wrap">
            <Footer />
         </div>
      </>
   )
}

export default Tracking
