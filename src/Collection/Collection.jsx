import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useGames } from "../Context/GameContext";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import GameStore from "../Store/Game-store";
import MainBanner from "../Store/MainBanner";
import Heading from "../Store/Heading";
import SecondaryBanner from "../Store/SecondaryBanner";
import Video from "../Store/Video";

function Collection() {
   const navigate = useNavigate();
   const games = useGames();
   const { forUser, orderData, productData, setProductData, setRadioState, onHover, setOnHover, isOnPlayControl, setIsOnPlayControl } = games;
   const [searchParams] = useSearchParams();
   const cat = searchParams.get("cat");

   // Define data for different categories
   const categoryData = {
      Adventure: {
         head: "Top Adventure Games",
         des: "Embark on epic quests, solve perplexing puzzles, and unearth hidden treasures in our thrilling adventure game collection!",
         image: "public/images/adventure.jpg"
      },
      Exploration: {
         head: "Top Exploration Games",
         des: "Discover new worlds, uncover ancient secrets, and embark on unforgettable journeys in our captivating exploration game collection!",
         image: "public/images/exp.jpg"
      },
      Puzzles: {
         head: "Top Puzzle Games",
         des: "Challenge your mind, test your wit, and solve intricate puzzles in our mind-bending puzzle game collection!",
         image: "public/images/puz.jpg"
      },
      default: {
         head: "Top Games",
         des: "Explore our diverse collection of thrilling games that cater to every taste and preference!",
         image: "public/images/wp5409817-shooting-games-wallpapers.jpg"
      }
   };
   const head = searchParams.get("cat") === "Adventure" ? "Thrills Await With Our Latest Collection" : searchParams.get("cat") === "Exploration" ? "Discover Worlds Beyond Imagination And Screen" : searchParams.get("cat") === "Shooting" ? "Action-packed adrenaline unleashed with scope zoomed-in" : "Mind-bending challenges await."

   // Get data based on the category or use default data
   const data = categoryData[cat] || categoryData.default;

   useEffect(() => {
      if (cat === null) {
         navigate("/store");
      }
   }, [cat, navigate]);

   return (
      <>
         <div className="nav-wrap">
            <Navbar />
         </div>
         <div className="abc" onDoubleClick={() => {
            if (isOnPlayControl) {
               setOnHover(false)
               setIsOnPlayControl(false)
            }
         }}>
            <MainBanner />
            <Heading heading={head} />
            <SecondaryBanner color={"white"} align={"center"} data={data} image={data.image} />
            <div className="Store-games-rec">
               {forUser
                  .filter(data => data.Category?.includes(cat))
                  .map(data => (
                     <GameStore key={data.id} data={data} />
                  ))}
            </div>
         </div>
         {onHover && productData?.Trailer || isOnPlayControl && productData?.Trailer ? <Video data={productData} /> : null}
         <div className="foot-wrap">
            <Footer />
         </div>
      </>
   );
}

export default Collection;
