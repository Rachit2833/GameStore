import React, { useEffect, useState } from "react";
import { useEditQuantity, useRemoveToCart } from "../Function/useRemoveFromCart";
import "./Cart.css";
import Loader from "../Home/Loader";

function CartItems({ data }) {
    const { id, Games, Quantity } = data;

    const { removeCartMutate, isRemovingFromCart } = useRemoveToCart();
    const { quantityMutate, isUpadting } = useEditQuantity();

    const [quantity, setQuantity] = useState(Quantity);

    useEffect(() => {
        console.log("run");
        const Updata = {
            "id": id,
            "Quantity": quantity
        };
        quantityMutate(Updata);
    }, [quantity]);

    return (
     <>
     {isUpadting?<Loader />: null}
        <div className="item">
            <img className="cart-item-img" src={Games.ImageUrl} alt="Legend Of Zelda (Breath Of The Wild)" />
            <div className="cart-item-details">
                <div className="cart-item-title">
                    <h1 className="cart-item-heading">{Games.Name}</h1>
                    <h2 className="cross icon-cart" onClick={() => removeCartMutate(data)}>
                        ⤬
                    </h2>
                </div>
                <span className="ref">Ref: {Games.RefNumber} </span>
                <div className="delivery-methods">
                    <span className="types">
                        <span className="icon-cart">✔️</span>
                        Click & Collect
                    </span>
                    <span className="types">
                        <span className="icon-cart">✔️</span>
                        Home Delivery
                    </span>
                </div>
                <div className="cart-quantity">
                    <span className="side-head-cart">Details:</span>

                    <div className="buttons">
                        <div className="btnx minus" onClick={() => setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : prevQuantity)}>
                            -
                        </div>
                        <div className="btnx input">{quantity}</div>
                        <div className="btnx plus" onClick={() => setQuantity(prevQuantity => prevQuantity + 1)}>
                            +
                        </div>
                    </div>

                    <span className="price-cart-small">${Games.Price}</span>
                    <span className="total">${Math.round((Games.Price * quantity))}</span>
                </div>
                <div className="members-discount">
                    <ion-icon className="icon-cart" name="game-controller-outline"></ion-icon>
                    <h2> Become A Members To Get Additional 5% Discount On Every Order</h2>
                </div>
            </div>
        </div>
        </>
    );
}

export default CartItems;
