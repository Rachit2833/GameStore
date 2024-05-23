// Recommended.js
import React from "react";
import "./styles.css"
import Game from "./Game";

function Recommended() {
    return (
        <section className="Home-recommended">
            <div className="Home-container">
                <h2 className="Home-recommended-heading">Top Games This Week</h2>
                <div className="Home-games">
                  <Game />
                  <Game />
                  <Game />
      
                </div>
            </div>
        </section>
    );
}

export default Recommended;
