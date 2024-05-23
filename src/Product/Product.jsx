import { useEffect } from "react"
import { useGames } from "../Context/GameContext"
import Footer from "../Home/Footer"
import Navbar from "../Home/Navbar"
import MainIamge from "./MainIamge"
import ProductDescription from "./ProductDescription"
import ProductDetails from "./ProductDetails"
import RadioSection from "./RadioSection"
import SideImages from "./SideImages"
import { useNavigate, useSearchParams } from "react-router-dom"
import { Toaster } from "react-hot-toast"

function Product() {
  const games=useGames()
  const { productData, setProductData,forUser }=games
  const [searchParams]=useSearchParams()
  const navigate =useNavigate()







  useEffect(() => {
    window.scrollTo(0, 0);
    if (searchParams.get("ref") === null) {
      navigate("/store");
    }
    const storedProductData = localStorage.getItem("productData");
    if (storedProductData) {
      setProductData(JSON.parse(storedProductData));
    }
  }, [setProductData]);
    return (
      <>
      <div className="nav-wrap">
        <Navbar />
      </div>
           <div className="abc">
          <section class="product">
            <Toaster />
            <SideImages />
            <MainIamge />
            <ProductDetails />

          </section>
          <RadioSection />
          <ProductDescription />
           </div>
        <div className="foot-wrap">
          <Footer />
        </div>
      </>
            
    
    )
}

export default Product
