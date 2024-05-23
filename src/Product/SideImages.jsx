import { useGames } from "../Context/GameContext";
import "./Product.css";

function SideImages() {
    const games = useGames();
    const { productImage, setProductImage, productData } = games;

    return (
        <div className="images">
            <img
                className={`img ${productImage === 1 ? 'selected' : ''}`}
                src={productData?.ImageUrl}
                alt=""
                onClick={() => setProductImage(1)}
            />
            <img
                className={`img ${productImage === 2 ? 'selected' : ''}`}
                src="public/images/victor-0NJ9urGXrIg-unsplash.jpg"
                alt=""
                onClick={() => setProductImage(2)}
            />
            <img
                className={`img ${productImage === 3 ? 'selected' : ''}`}
                src="public/images/C1HdOS3MkqS.jpg"
                alt=""
                onClick={() => setProductImage(3)}
            />
            <img
                className={`img ${productImage === 4 ? 'selected' : ''}`}
                src="public/images/the-legend-of-zelda-breath-of-the-wild-sunset-i40519.jpg"
                alt=""
                onClick={() => setProductImage(4)}
            />
        </div>
    );
}

export default SideImages;
