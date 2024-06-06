import { useNavigate, useSearchParams } from "react-router-dom"
import "./styles.css"
import Profile from "./Profile"
import { useGames } from "../Context/GameContext"
import PopUp from "./PopUp"
import { useEffect, useState } from "react"
import ThreeDot from "./ThreeDot"
import OrderItem from "../Orders/OrderItem"

function Navbar() {
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate =useNavigate()
    const games = useGames()
    const { forUser, setProductData, onHover, customerId }=games
    const [isProfileOpen, setIsProfileOpen] = useState(false)
    const [isOptionOpen, setIsOptionOpen] = useState(false)
    const [isThreeDotOpen, setIsThreeDotOpen] = useState(false)
    const [searchData,setSearchData] =useState(null)
    const filterData = forUser.filter(item => item.Name?.toUpperCase()?.includes(searchData?.toUpperCase()));


    console.log(filterData, "filter");


    const handleClick = (data) => {
        searchParams.set("ref", data.RefNumber);
        setSearchParams(searchParams);
        setProductData(data);
        localStorage.setItem('productData', JSON.stringify(data));


            navigate(`/product?${searchParams.toString()}`);

    }; 
    return (
        <>
        <header className="header-sec-newNav">
             <div className="intro-newNav">
                <img src="images/6f6df964a26d2da0d7aa12d3790f1049.jpg" alt="" className="small-log-newNav" />
                <h2 style={{margin:"auto 0", }} className="store-logo-newNav" onClick={() => {
                    navigate("/")
                }}><b className="b">G</b><span>ame</span><b className="a">S</b><span className="st">tore</span></h2>
             </div>
             <div className="newNav">
                <ul>
                    
                    <li onClick={()=>{
                        navigate("/store")
                    }}>Store</li>
                    <li onClick={()=>{
                            navigate("/accessories")
                        }}>Accessories</li>
                        <li onClick={()=>{
                            navigate("/cart")
                        }}>Cart</li>
                </ul>
             </div>
             <div  className="search-newNav">
                <input style={{}}
                    type="text"
                    className="search-section"
                    placeholder="Search Games Consoles And Accessories"
                    onChange={(e)=>{
                        console.log(e.target.value);
                       setSearchData(e.target.value)
                    }}
                />
               
             </div>
             
             <div className="account-info-newNav">
                <span className="icon-newNav" onClick={()=>{
                    setIsThreeDotOpen(!isThreeDotOpen)
                        setIsOptionOpen(false)
                        setIsProfileOpen(false)
                }}><ion-icon name="ellipsis-vertical-outline" /></span>
                <span className="icon-newNav" onClick={()=>{
                    setIsOptionOpen(!isOptionOpen)
                    setIsProfileOpen(false)
                        setIsThreeDotOpen(false)
                }}><ion-icon name="grid-outline" /></span>
               {customerId? <div class="circle gray-border" onClick={()=>{
                    setIsProfileOpen(!isProfileOpen)
                        setIsThreeDotOpen(false)
                        setIsOptionOpen(false)
                }} >
                    <span>A</span>
                </div>:null}
             </div>
            
        </header>
            <div style={{overflowX:"auto"}} className={searchData?"search":null}>
                  {searchData!==""?filterData?.map((item)=>{
                      return <div class="search-div" onClick={()=>handleClick(item)}>
                          <img style={{maxHeight:"8rem"}} src={item.ImageUrl} alt="Image" class="imaged" />
                              <p>{item.Name}</p>
                      </div>
                  }):null}
            </div>
        {isProfileOpen?<Profile />: null}
            {isOptionOpen ?<PopUp />:null}
           {isThreeDotOpen? <ThreeDot />:null}
         </>
    )
}

export default Navbar
