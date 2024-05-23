import { useNavigate } from "react-router-dom"
import "./styles.css"
function Hero() {
    const navigate =useNavigate()
    return (
        <section  class="Home-section-hero">
            <div class="Home-hero-wrapper">
                <div class="Home-hero-text">
                    <h2 class="Home-hero-heading">
                        Discover Your Next Adventure Top Games at Unbeatable Prices!</h2>
                    <p class="Home-hero-description">Your one-stop shop for the latest releases, classic favorites, and unbeatable deals on video games for all platforms.</p>

                    <button style={{fontSize:"2.2rem"}} class="Home-Button" onClick={()=>{
                        navigate("/login")
                    }} >Login</button>
                    <button style={{ fontSize: "2.2rem" }} class="Home-Button-Sec"
                        onClick={() => {
                            navigate("/signup")
                        }} >JoinUS</button>
                    <div class="Home-customer-div">
                        <img class="Home-customer-img" src="public/images/jpeg-optimizer_sergio-de-paula-c_GmwfHBDzk-unsplash.jpg" alt=""></img>
                        <img class="Home-customer-img" src="public/images/jpeg-optimizer_christopher-campbell-rDEOVtE7vOs-unsplash.jpg" alt=""></img>
                        <img class="Home-customer-img" src="public/images/jpeg-optimizer_marek-pospisil-PLZb71hLKWk-unsplash.jpg" alt=""></img>
                        <img class="Home-customer-img" src="public/images/jpeg-optimizer_ospan-ali-6xv4A1VA1rU-unsplash.jpg" alt=""></img>
                                        <img class="Home-customer-img" src="public/images/jpeg-optimizer_sergio-de-paula-c_GmwfHBDzk-unsplash.jpg" alt=""></img>
                        <img class="Home-customer-img" src="public/images/jpeg-optimizer_sergio-de-paula-c_GmwfHBDzk-unsplash.jpg" alt=""></img>
                                                <h2 class="Home-customer-text">Trusted By Over A Million User</h2>
                                            </div>
                                        </div>
                                        <div class="Home-hero-image">
                                            <img class="Home-hero-img" src="images/download.jpeg" alt=""></img>
                                        </div>
                                    </div>
                                </section>
    )
}

export default Hero
