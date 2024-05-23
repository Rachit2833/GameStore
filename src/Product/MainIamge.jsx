import { useSearchParams } from "react-router-dom"
import { useGames } from "../Context/GameContext"
import "./Product.css"
import { useEffect } from "react"
function MainIamge() {
    const games = useGames()
    const [searchParams, setSearchParams]=useSearchParams()
    const { forUser, productData, setProductData, productImage, setProductImage  } = games
     useEffect(()=>{
        console.log(productImage,"here");
     },productData)
    return (
        <div class="main-image">

            <img
                className="main-img"
                src={
                    productImage === 1 ?
                        productData?.ImageUrl :
                        productImage === 2 ?
                            "public/images/victor-0NJ9urGXrIg-unsplash.jpg" : productImage === 3 ? "public/images/C1HdOS3MkqS.jpg" : productImage === 4 ? "public/images/the-legend-of-zelda-breath-of-the-wild-sunset-i40519.jpg" : null
                }

                alt=""
            />
        </div>
    )
}

export default MainIamge
