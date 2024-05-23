import React from "react";
import "./Checkout.css";
import { useGames } from "../Context/GameContext";

function SavedAddress({ value, data, selected, onChange }) {
   
    const games = useGames();
    const {  userData} = games;

    const handleRadioChange = () => {
        onChange(value);
    };
    
     
    return (
        <div className="add">
            <div className="info">
                <input
                    type="radio"
                    id={value}
                    name="options"
                    value={value}
                    checked={selected}
                    onChange={handleRadioChange}
                />
                <label htmlFor={value}>{data.name}</label>
            </div>
            <div className="other">
                <address>
                    <p>
                        {data.street}, {data.apartment}
                    </p>
                    <p>{data.contact_number}</p>
                    <p>
                        {data.city}, {data.state}, {data.zip}
                    </p>
                    <p>{data.country}</p>
                </address>
            </div>
        </div>
    );
}

export default SavedAddress;
