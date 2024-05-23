import { useEffect, useState } from "react"
import { useGames } from "../Context/GameContext"
import { useNavigate } from "react-router-dom"

function Bill() {
    const games = useGames()
    const { CartData, totalAmt, setTotalAmt ,deliveryAmt, setDeliveryAmt } = games

   
    const navigate=useNavigate()
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
        <div className="bill">
            <div className="delivery-options">
                <div className="radio-container">
                    <input type="radio" id="option1" name="options" value="option1" checked />
                    <label htmlFor="option1">Home Delivery</label>
                </div>

                <div className="radio-container">
                    <input type="radio" id="option2" name="options" value="option2" />
                    <label htmlFor="option2">Store Collection</label>
                </div>
            </div>
            <div className="total">
                <table>
                    <tbody>
                        <tr className="tr-cart">
                            <td>SubTotal</td>
                            <td>{totalAmt}</td>
                        </tr>

                        <tr className="tr-cart">
                            <td>Delivery</td>
                            <td>{deliveryAmt}</td>
                        </tr>

                        <tr className="tr-cart sum">
                            <td>Total:</td>
                            <td>${totalAmt+deliveryAmt}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="offers">
                <span className="Coupon">Apply a Coupon Code</span>
            </div>
            <div className="members-discount">
                <ion-icon className="icon-cart" name="game-controller-outline"></ion-icon>
                <h2>Members Get Additional 5% Discount On Every Order</h2>
            </div>
            <div className="Reward-Points">
                <ion-icon className="icon-cart" name="game-controller-outline"></ion-icon>
                <h2>Reward Points On Every Order </h2>
            </div>
            <div className="cart-checkout-button">
                <button className="checkout-cart-btn" onClick={()=>{
                    navigate("/checkout")
                }}>Checkout</button>
            </div>
            <div className="security">
                <h2>Your payments are as safe as Kratos wielding his Blades of Chaos, ensuring peace of mind with every transaction.</h2>
                <img className="img-kratos" src="kratos2.png" alt="" />
            </div>
        </div>
    )
}

export default Bill
