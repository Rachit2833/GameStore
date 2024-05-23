import React, { useState } from 'react';
import { useGames } from '../Context/GameContext';
import { useSearchParams } from 'react-router-dom';
import { addToCart } from '../Services/addtoCart';
import { useAddToCard } from '../Function/useAddToCart';
import Loader from '../Home/Loader';
import Overlay from '../Home/Overlay';


const PriceComponent = () => {
    const [searchParams] = useSearchParams();
    const [count, setCount] = useState(1);

    const games = useGames();
    const { forUser, customerId, setCustomerId, quantity, setQuantity,productData } = games;
    const { cartAddMutate, isLoading } = useAddToCard();// Corrected function name
   


    return (
      <>
            {isLoading ? <>
            <Overlay />
                <Loader /></>:null}
        <div className="price">
            <h2 className="title">{productData?.Name}</h2>
            <span className="rating">⭐️⭐️⭐️⭐️⭐️ (273 reviews)</span>
            <div className="money-div">
                <h2 className="money-dis">${productData?.Price}</h2>
                <h2 className="money-org">{!productData?.Discount===0 ? (productData?.Discount + productData?.Price) : null}</h2>
            </div>
            <div className="other-pro">
                <div className="bundle">
                    <span className="section-heading">Available Bundle</span>
                    <ul className='ul-pro'>
                        <li>Regular Edition</li>
                        <li>Regular Edition+Collectors Pack</li>
                        <li>Special Edition Bundle</li>
                    </ul>
                </div>
                <div className="device">
                    <span className="section-heading">Devices</span>
                    <ul className='ul-pro'>
                        <li>Play Station 5</li>
                        <li>Play Station 4</li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div className="checkout">
                <div className="buttons">
                    <div className="btnx minus" onClick={() => {
                        console.log(quantity,"prior value");
                        console.log(quantity+1,"to set value");
                        setCount(count + 1)
                    }}>+</div>
                    <div className="btnx input">{count}</div>
                    <div className="btnx plus" onClick={() => {
                            setCount(count< 0 ? count : count - 1)
                    }}>-</div>
                </div>
                <div className="buy">
                    <button className="Cart" onClick={() => {
                        const data={
                            "CustomerId":customerId,
                            "ProductId":productData.RefNumber,
                            "Quantity":count
                            
                        }
                        
                        cartAddMutate(data)
                        
                    }} disabled={isLoading}>ADD TO CART</button>
                </div>
            </div>
            <div className="description" style={{overflowY:"auto" ,maxHeight:"10rem",}}>
                <span className="des-head">Description</span>
                <p className="des">
                    {productData?.Description}
                </p>
            </div>
        </div>
                    </>
    );
};

export default PriceComponent;
