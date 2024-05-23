import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"

function Footer() {
    const navigate =useNavigate()

    function scrollDownAndUp(position) {
        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });
    }
    return (
        
        <footer class="Home-footer">
            <div class="Home-main-footer">
                <div class="Home-info">
                    <div class="Home-foot-logo">
                        <img class="Home-footer-logo" src="images/6f6df964a26d2da0d7aa12d3790f1049.jpg" alt=""></img>
                    </div>
                    <div class="Home-social">
                        <ion-icon class="Home-social-icon" name="logo-instagram"></ion-icon>
                        <ion-icon class="Home-social-icon" name="logo-facebook"></ion-icon>
                        <ion-icon class="Home-social-icon" name="logo-twitter"></ion-icon>
                        <ion-icon class="Home-social-icon" name="mail-outline"></ion-icon>
                        <ion-icon class="Home-social-icon" name="logo-tiktok"></ion-icon>
                    </div>
                 
                    <div className="offers">
                        <span className="Coupon">Copyright @2024</span>
                    </div>
                </div>
                <div class="Home-site-info">
                    <span class="Home-Txt">Details</span>
                    <a href="#" class="Home-point">Log In</a>
                    <a href="#" class="Home-point" onClick={()=>{
                        navigate("/signup")
                    }}>Create Account</a>
                    <a href="#" class="Home-point" onClick={()=>{
                        navigate("/member")
                    }}>Become A Member</a>

                </div>

                <div class="Home-company-info">
                    <span class="Home-Txt">Company</span>
                    <a href="#" class="Home-point" onClick={()=>{
                        navigate("/about")
                    }}>About us</a>
                    <a href="#" class="Home-point" onClick={()=>{
                        navigate("/community")
                    }}>Community</a>
                    <a href="#" class="Home-point">Contact</a>
                    <a href="#" class="Home-point">Learn</a>

                </div>
                <div class="Home-policy">
                    <span class="Home-Txt">Policy</span>
                    <a href="#" class="Home-point" onClick={()=>{
                        navigate("/orders")
                    }}>My Orders</a>
                    <a href="#" class="Home-point" onClick={() => {
                        navigate("/orders")
                    }}>Return</a>
                    <a href="#" class="Home-point" onClick={()=>{
                        navigate("/terms")
                    }}>Privacy Protection</a>
                    <a href="#" class="Home-point">Warranty</a>
                </div>
                <div class="Home-extra-info">
                    <span class="Home-Txt">Others</span>
                    <a href="#" class="Home-point">Join Us</a>
                    <a href="#" class="Home-point">Copyright</a>
                    <a href="#" class="Home-point" onClick={() => {
                             
                        navigate("/")

                    }}>Contact</a>
                    <a href="#" class="Home-point">Developers</a>
                </div>


            </div>
        </footer>
    )
}

export default Footer
