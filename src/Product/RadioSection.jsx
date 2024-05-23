import React from 'react';
import { useGames } from '../Context/GameContext';
import "./Product.css";

function RadioSection() {
    const games = useGames();
    const { setRadioState, radioState } = games;

    const handleRadioChange = (e) => {
        setRadioState(e.target.value);
    };

    return (
        <section className="rad-btns">
            <div className="radio-container">
                <input
                    type="radio"
                    id="option1"
                    name="options"
                    value="option1"
                    checked={radioState === "option1"}
                    onChange={handleRadioChange}
                />
                <label htmlFor="option1">Product Specification</label>
            </div>

            <div className="radio-container">
                <input
                    type="radio"
                    id="option2"
                    name="options"
                    value="option2"
                    checked={radioState === "option2"}
                    onChange={handleRadioChange}
                />
                <label htmlFor="option2">Shipping & Return</label>
            </div>

            <div className="radio-container">
                <input
                    type="radio"
                    id="option3"
                    name="options"
                    value="option3"
                    checked={radioState === "option3"}
                    onChange={handleRadioChange}
                />
                <label htmlFor="option3">Reviews</label>
            </div>
        </section>
    );
}

export default RadioSection;
