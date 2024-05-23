import { useGames } from '../Context/GameContext';
import styles from './Review.module.css';
function Star() {
   const games =useGames()
   const { hovered, setHovered, rating, setRating }=games
   const handleStarClick = (index) => {
      setRating(index + 1);
   };

   const handleStarHover = (index) => {
      setHovered(index + 1);
      setRating(index + 1);
   };

   const handleStarLeave = () => {
      setHovered(0);
   };
   return (
      <div className={styles.stars} id="stars">
         {Array.from({ length: 5 }, (_, index) => (
            <span
               key={index}
               onClick={() => handleStarClick(index)}
               onMouseEnter={() => handleStarHover(index)}
               onMouseLeave={handleStarLeave}
               className={styles.star}
            >
               {rating === 0 ? "✩" : index < (rating || hovered) ? "⭐️" : "✩"}
            </span>
         ))}
      </div>
   )
}

export default Star

