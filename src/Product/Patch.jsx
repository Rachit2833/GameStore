import { useGames } from "../Context/GameContext"
import "./Product.css"
function Patch({data}) {
    const games = useGames()
    const { getRandomElementFromArray } = games
    const colors = ["royalblue", "red", "#33b249", "#0096FF", "#33b249", "#33b249", "#CF9FFF"]
    const color = getRandomElementFromArray(colors)
    return (
        <div className="patch" style={{ backgroundColor: color }}>
            <div className="patch-content">
                <span>#{data}</span>
                {<span className="cross-patch">⤬</span>}
            </div>
        </div>


    )
}

export default Patch