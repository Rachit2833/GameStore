// Game.js
import "./styles.css"
import React from "react";

function Game() {
    return (
   <>
            <div class="Home-Game-Image">
                <img class="Home-game-img" src="images/the-legend-of-zelda-breath-of-the-wild-sunset-i40519.jpg" alt=""></img>
            </div>
            <div class="Home-Details">
                <div class="Home-Description-Game">
                    <h2 class="Home-game-name">The Legend of Zelda: Breath of the Wild</h2>
                    <p class="Home-Game-Details">"The Legend of Zelda: Breath of the Wild" is an action-adventure game developed and published by Nintendo for the Nintendo Switch and Wii U consoles. Released on March 3, 2017, Breath of the Wild marked a significant departure from previous Zelda games, introducing an expansive open-world environment and a more nonlinear approach to gameplay.</p>
                </div>
                <div class="Home-release-date">
                    <span class="Home-date_heading">Release Date:</span>
                    <h2 class="Home-release-Date">March 3, 2017</h2>
                </div>
                <div class="Home-others">
                    <div class="Home-device-support">
                        <img src="images/images (1).png" alt=""></img>
                    </div>
                    <div class="Home-rating">
                        <img class="Home-rating-img" src="images/ESRB_Everyone_10+.svg.png" alt=""></img>
                    </div>

                </div>

            </div>
            <div class="Home-price">
                <span class="Home-buy-heading">Buy Now</span>


                <div class="Home-checkout">
                    <span class="Home-total">Total:</span>
                    <h2 class="Home-price-Amount">$49.99</h2>

                </div>
                <div class="Home-units">
                    <h2 class="Home-abc">Units</h2>
                    <input class="Home-input" value="1" type="number" maxlength="1"></input>
                </div>
                <div class="Home-btns">

                    <button class="Home-checkout-btn">Checkout</button>
                    <button class="Home-checkout-cart">Cart</button>

                </div>
            </div>
   </>
    );
}

export default Game;
