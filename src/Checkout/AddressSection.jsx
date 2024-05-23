import React, { useEffect, useState } from "react";
import { useGames } from "../Context/GameContext";
import SavedAddress from "./SavedAddress";
import Slide from "./Slide";

function AddressSection() {
    const games = useGames();
    const { selectedAddress, setSelectedAddress,userData, isLoadingUserData, selectedAddressData, setSelectedAddressData } = games;



    const handleAddressChange = (value, data) => {
        setSelectedAddress(value);
        setSelectedAddressData(data);
    };
  
    return (
        <section className="address">
            <Slide
                Number={2}
                Data={"Delivery Address "}
                id={false}
                extended={
                    <>
                        <div className="radio-group gdr">
                            {userData[0]?.SavedAddress?.length>0?userData[0]?.SavedAddress?.map((data, index) => {
                                const newData = JSON.parse(data);
                                return (
                                    <SavedAddress
                                        key={index}
                                        data={newData}
                                        value={`option${index + 1}`}
                                        selected={selectedAddress === `option${index + 1}`}
                                        onChange={(value) => handleAddressChange(value, newData)}
                                    />
                                );
                            }):<>
                                  <div style={{display:"flex",justifyContent:"center"}}>
                                        <img style={{ height: "40rem", width: "40rem" }} src="/images/—Pngtree—house painting vector_11242730.png" alt="" />
                                  </div>
                                    <h1 style={{ textAlign: "center", fontSize: "2rem" }}>Oops! No shipping address found. <a href="/address">Let's add one!</a></h1>
                            </>}
                        </div>
                    </>
                }
            />
           

        </section>
    );
}

export default AddressSection;
