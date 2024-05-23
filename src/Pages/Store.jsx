import { useEffect } from "react"
import Footer from "../Home/Footer"
import Navbar from "../Home/Navbar"
import Categories from "../Store/Categories"
import Consoles from "../Store/Consoles"
import EditorPicks from "../Store/EditorPicks"
import ForKids from "../Store/ForKids"
import ForUser from "../Store/ForUser"
import MainBanner from "../Store/MainBanner"
import Ninetendo from "../Store/Ninetendo"
import PlayStationExclusive from "../Store/PlayStationExclusive"
import SecondaryBanner from "../Store/SecondaryBanner"
import "../Store/Store.css"
import { useGames } from "../Context/GameContext"
import Video from "../Store/Video"
import { useNavigate } from "react-router-dom"

function Store() {
   
   const navigate =useNavigate()
    const games = useGames()
    const { session, isSession, productData, setProductData,setRadioState, onHover, setOnHover, isOnPlayControl, setIsOnPlayControl } = games
    useEffect(()=>{
            setRadioState("option1")
    },[])
    const data1={
        "head":"Editor's Pick",
        "des":"Discover our top Editor's Picks for the latest and greatest in gaming experiences!"
    }
    const data2 = {
        "head":"For Switch Lovers",
        "des":"Special Collection Curated For Nintendo Fans"
    }
    const data3 = {
        "head": "Upto 15% discount on Selected Consoles",
        "des": "Maximum 15% percent discount on lastest gaming consoles"
    }
   

    return (
         <>
            <div className="nav-wrap" >
                <Navbar />
       </div>
            <div onDoubleClick={()=>{
                if(isOnPlayControl){
                    setOnHover(false)
                    setIsOnPlayControl(false)
                }
            }} className="Store-main-Content">
                
                <MainBanner />
                <Categories />
                <ForUser  />
                <SecondaryBanner align={"left"} image={"images/1000_F_284322178_4gxGLWFFujUQpE7p31xMLDt916vayMgs.jpg"} data={data1}  />
                <EditorPicks />
                <ForKids />
                <PlayStationExclusive />
                <SecondaryBanner align={"left"} color={"red"} image={"images/050645f9efabc06487aa1cb76369c35b.jpg"} data={data2} />
                <Ninetendo />
                <SecondaryBanner align={"center"} color={"white"} image={"images/mighty-and-sleek-playstation-5-gaming-console-2zgbtlj334hdsh0g.jpg"} data={data3} />
                <Consoles />
                {onHover && productData?.Trailer || isOnPlayControl && productData?.Trailer ?<Video data={productData} />:null}
              
       </div>
          
            <div className="foot-wrap" style={{ minWidth: "120rem" }}>
                <Footer />
            </div>
         </>
    )
}

export default Store
