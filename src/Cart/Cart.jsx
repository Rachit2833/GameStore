import CartItems from "./CartItems";
import "./Cart.css";
import Bill from "./Bill";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import Address from "./Address";
import { useEffect } from "react";

import { useGames } from "../Context/GameContext";
import { useNavigate } from "react-router-dom";
import Loader from '../Home/Loader';
import { useEditQuantity, useRemoveToCart,  } from "../Function/useRemoveFromCart";
import { Toaster } from "react-hot-toast";

function Cart() {
    const games=useGames()
    const { CartData, isLoadingCart, radioState, setRadioState} =games
    const navigate=useNavigate()
    const { isUpdating }=useEditQuantity()
    const { isRemovingFromCart } =useRemoveToCart()
    console.log(CartData?.length > 0);
    console.log(CartData.length);
  
    return (
  <>


         <div className="nav-wrap">
                <Navbar />
         </div>
      <div className="abc">
                <h1 className="comp-head">Your Basket</h1> 
            <section class="cart">
                <Toaster />
                    {isLoadingCart || isRemovingFromCart || isUpdating ?<Loader />:null}
                    <div class={`cart-items ${CartData?.length > 0  ? null: "empty-div"}`}>
                        {CartData?.length <= 0 && !isLoadingCart ? <> <h2 className="empty">No Item In The Cart</h2>
                            <p className="find">
                                Unlock the cart's empty canvas, it's time to curate your cart with treasures yet to be discovered!</p>
                            <button className="small-btn" onClick={() => {
                                navigate("/store")
                            }}>
                                Explore
                            </button>
                        </>:CartData?.map((data)=>{
                            return <CartItems data={data}/>
                       }) 
                       }
                </div>
                    {CartData?.length > 0 ?   <Bill />:null}
            </section>
                { CartData?.length > 0 ? <Address />: null}

      </div>
            <div className="foot-wrap">
                <Footer />
            </div>
  </>
    );
}

export default Cart;

