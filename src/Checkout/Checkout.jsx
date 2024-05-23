import AddressSection from "./AddressSection"
import SavedAddress from "./SavedAddress"
import Slide from "./Slide"
import "./Checkout.css"
import Footer from "../Home/Footer"
import Navbar from "../Home/Navbar"

import { useGames } from "../Context/GameContext"
import { useEffect } from "react"
function Checkout() {
    const games=useGames()
    const { CartData,totalAmt, setTotalAmt, deliveryAmt, setDeliveryAmt } =games
    useEffect(() => {
        let subtotal = 0;
        CartData.forEach(data => {
            subtotal += data.Games.Price * data.Quantity;
        });

        const deliveryAmount = subtotal < 50 && CartData.length > 0 ? 7.99 : 0.00;

        setTotalAmt(subtotal);
        setDeliveryAmt(deliveryAmount);
    }, [CartData])
    return (
       <>
       <div className="nav-wrap">
        <Navbar />
       </div>
            <div className="abc">
                <Slide Number={1} Data={"Account"} id={true} />
                <AddressSection />
               
                <Slide Number={"3"} Data={"Order Summary"} id={false} extended={
                <div class="gdr" style={{padding:"4rem"}}>
                <div class="total">
                    <table>
                        <tbody>
                            <tr className="tr-check">
                                <td>Sub-Total</td>
                                        <td>${totalAmt}</td>
                            </tr>

                                    <tr className="tr-check">
                                        <td>Delivery</td>
                                        <td>{deliveryAmt===0?"Free":deliveryAmt}</td>
                            </tr>

                                    <tr class="sum tr-check">
                                        <td>Total:</td>
                                        <td>{totalAmt+deliveryAmt}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
                }/>
                <Slide Number={"4"} Data={"Payment"} id={false}  />
            </div>
            <div className="foot-wrap">
                <Footer />
            </div>
       </>
    )
}

export default Checkout
