import { useNavigate, useSearchParams } from "react-router-dom";
import "./Store.css";
import { useGames } from "../Context/GameContext";
import Modal from "../Utils/Modal";
import Review from "../Utils/Review";
import { useState } from "react";
import toast from "react-hot-toast";

function GameStore({ data }) {
    const games = useGames();
    const { isOnPlayControl, setIsOnPlayControl,productData, setProductData, onHover, setOnHover } = games;
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();


    const handleClick = () => {
        searchParams.set("ref", data.RefNumber);
        setSearchParams(searchParams);
        setProductData(data);
        localStorage.setItem('productData', JSON.stringify(data));
        if(onHover){
            navigate(`/product?${searchParams.toString()}`);
        }
    }; 
    function mouseLeave(){
        if (!isOnPlayControl) {
            
        }
        
    }
    function mouseEnter(){
        if (!isOnPlayControl) {
            setProductData(data)
        }
       
        setOnHover(true)
    }
    return (
        <div onMouseLeave={()=>{
            setOnHover(false)
        }} style={{}}
        onDoubleClick={handleClick}
        className="Store-game" >
           
            <img onClick={() => {setIsOnPlayControl(true)}}
             onMouseLeave={mouseLeave} 
             onMouseEnter={mouseEnter} 
             className="Store-game-img" src={data?.ImageUrl} alt="" />
            

            <span className="Store-game-name">{data?.Name || data?.Console}</span>
            <div className="c-d" style={{ overflowY: "auto", maxHeight: "12rem", }}>
                <p className="Store-game-des">{data?.Description || data?.Manufacturer}</p>
                {data?.Manufacturer && <p className="Store-game-des">{data?.ReleaseYear}</p>}
            </div>
        </div>

    );
}

export default GameStore;
