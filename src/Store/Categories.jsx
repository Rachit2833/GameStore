import { useNavigate, useSearchParams } from "react-router-dom";

function Categories() {
    const navigate =useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    return (
      <>
            <h2 class="Store-sec-head">Top categories</h2>
            <div class="Store-categories">
                <div class="Store-category" onClick={()=>{
                    searchParams.set("cat","Adventure" )
                    setSearchParams(searchParams)
                    navigate(`/collection?${searchParams.toString()}`);
                }}>
                    <h2 class="Store-cat-name">Adventure</h2>
                    <ion-icon class="Store-icon odd" name="rocket-outline"></ion-icon>
                </div>
                <div class="Store-category"onClick={()=>{
                    searchParams.set("cat","Exploration" )
                    setSearchParams(searchParams)
                    navigate(`/collection?${searchParams.toString()}`);
                }}>
                    <h2 class="Store-cat-name">Exploration </h2>
                    <ion-icon class="Store-icon even" name="telescope-outline"></ion-icon>
                </div>
                <div class="Store-category"onClick={()=>{
                    searchParams.set("cat","Shooter" )
                    setSearchParams(searchParams)
                    navigate(`/collection?${searchParams.toString()}`);
                }}>
                    <h2 class="Store-cat-name">Shooting</h2>
                    <ion-icon class="Store-icon odd" name="star-outline"></ion-icon>
                </div>
                <div class="Store-category"onClick={()=>{
                    searchParams.set("cat","Puzzles" )
                    setSearchParams(searchParams)
                    navigate(`/collection?${searchParams.toString()}`);
                }}>
                    <h2 class="Store-cat-name">Puzzles</h2>
                    <ion-icon class="Store-icon even" name="extension-puzzle-outline"></ion-icon>
                </div>
            </div>
      </>
    )
}

export default Categories
