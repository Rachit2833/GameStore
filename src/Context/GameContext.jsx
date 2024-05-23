import React, { createContext, useContext, useState } from "react";
import { useQuery } from "react-query";
import { getUserGames } from "../Services/getUserGame";
import { getConsoles } from "../Services/getConsoles";
import { getCartData } from "../Services/getCartData";
import { getReviews } from "../Services/getReviews";
import { getOrders } from "../Services/getOrders";
import { getUserData } from "../Services/getUserData";
import { getAccessories } from "../Services/getAccessories";
import { getBannerStoreData } from "../Services/getBannerDataStore";
import { getUser } from "../Services/getUser";


const Games = createContext();

function GamesContext({ children }) {
    
    let val = localStorage.getItem('CustomerId')
  
    const [radioState, setRadioState] = useState("option1")
    const [customerId, setCustomerId] = useState(val)
    const [totalAmt, setTotalAmt] = useState(0)
    const [deliveryAmt, setDeliveryAmt] = useState(0)
    const [productData, setProductData] = useState(null)

    const [trackingData, setTrackingtData] = useState(null)
    const [selectedAddressData, setSelectedAddressData] = useState(null);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [modalOpen, setModalOpen] = useState(false) 
    const [reviewAddingData, setReviewAddingData] = useState(null) 
    const [rating, setRating] = useState();
    const [hovered, setHovered] = useState(0);
    const [productImage,setProductImage] =useState(1)
    const [onHover, setOnHover] = useState(false);
    const [isOnPlayControl, setIsOnPlayControl] = useState(false);

    const { data: forUser = [], isLoading } = useQuery({
        queryFn: getUserGames,
        queryKey: ["ForUser"]
    });
    const { data: AccUser = [], isAccLoading } = useQuery({
        queryFn: getAccessories,
        queryKey: ["ForAcc"]
    });

    const { data:session, isLoading:isSession } = useQuery({
        queryFn: getUser,
       queryKey: ["Session"]
       
    })
   
    const { data: userData = [], isLoadingUserData } = useQuery({
        queryFn: (customerId)=>{ 
            if (localStorage.getItem('CustomerId')) {
       
                 return getUserData(val)
            } else {
                return getUserData(customerId)
            }
        }        
        ,
        queryKey: ["UserData"]
    });


    const { data: Consoles= [], isLoading:isConsoleLoading } = useQuery({
        queryFn: getConsoles,
        queryKey: ["Consoles"]
    });
    const { data: BannerStoreData = [], isLoading: isLoadingBannerStore } = useQuery({
        queryFn: getBannerStoreData,
        queryKey: ["BannerStore"]
    });

    const{data:CartData=[],isLoading:isLoadingCart}=useQuery({
        queryFn:()=>{
            console.log(customerId,"hbh");
          return getCartData(customerId)
        }
        , queryKey:["Cart"]
    })


    const { data, isLoading: isk } = useQuery({
        queryFn:()=> getReviews(productData?.RefNumber),
        queryKey: ["Reviews", productData?.RefNumber] 
    });

    const { data: orderData = [], isLoading: isOrderLoading } = useQuery({
        queryKey: ["Orders"],
        queryFn: () => {
            return getOrders(customerId)
        }
    }

    );
  


    function getRandomElementFromArray(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }
   
    function getDifference(date1, date2) {
        const date1TimePart = date1.slice(11)
        const date1Time = date1TimePart.split(":")
        const date2TimePart = date2.slice(11)
        const date2Time = date2TimePart.split(":")
        const date1Year = date1.slice(0, 4)
        const date2Year = date2.slice(0, 4)
        const date1Month = date1.slice(5, 7)
        const date2Month = date2.slice(5, 7)
        const date1Day = date1.slice(8, 10)
        const date2day = date2.slice(8, 10)
        const YearDifference = (date2Year - date1Year) * 365
        const MonthDifference = (date2Month - date1Month) * 30
        const DayDifference = (date2day - date1Day)
        const HourDifference = ((date2Time[0] - date1Time[0]) / 24)
        const finalTime = YearDifference + MonthDifference + DayDifference + HourDifference
       return finalTime
    }
    function getCurrentFormattedDate() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
        const day = ('0' + currentDate.getDate()).slice(-2);
        const hours = ('0' + currentDate.getHours()).slice(-2);
        const minutes = ('0' + currentDate.getMinutes()).slice(-2);
        const seconds = ('0' + currentDate.getSeconds()).slice(-2);

        // Construct the formatted date string
        const formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

        return formattedDate;
    }


    return (
        <Games.Provider value={{ session,  isSession, isOnPlayControl, setIsOnPlayControl,onHover, setOnHover, productImage, setProductImage,hovered, setHovered,rating, setRating,reviewAddingData, setReviewAddingData, modalOpen, setModalOpen,trackingData, setTrackingtData,AccUser, isAccLoading,selectedAddress, setSelectedAddress,selectedAddressData, setSelectedAddressData,userData , isLoadingUserData, getCurrentFormattedDate,getDifference,forUser, isLoading, Consoles, isConsoleLoading, radioState, setRadioState, customerId, setCustomerId, CartData, isLoadingCart, totalAmt, setTotalAmt, deliveryAmt, setDeliveryAmt, productData, setProductData, data, getRandomElementFromArray,orderData,isOrderLoading  }}>{children}</Games.Provider>
    );
}

function useGames() {
    const gamesData = useContext(Games);
    return gamesData;
}

export { useGames, GamesContext };
