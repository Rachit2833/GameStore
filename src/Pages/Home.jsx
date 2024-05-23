import Contact from "../Contact/Contact"
import { useGames } from "../Context/GameContext"
import BuyFromUs from "../Home/BuyFromUs"
import Featured from "../Home/Featured"
import Footer from "../Home/Footer"
import Hero from "../Home/Hero"
import Navbar from "../Home/Navbar"
import Recommended from "../Home/Recommended"
import Testimonial from "../Home/Testimonial"
import Work from "../Home/Work"

function Home() {

    return (
        <>
            <div className="nav-wrap" >
                <Navbar />
            </div>
        

           


           <div style={{overflowX:"hidden",padding:" 0 1rem " ,minWidth:"140rem"}}>
                <Hero />
                <Work />
                <BuyFromUs />
                <Featured />
                <Testimonial />
                <h2 style={{ margin: "0", backgroundColor: "#f4eefc", marginTop: "0" }} class="Home-feature-top">Level Up Your Communication - Contact Us!</h2>
                <Contact />
           </div>

         

            <div className="foot-wrap">
                <Footer />
            </div>
        </>
    )
}

export default Home
