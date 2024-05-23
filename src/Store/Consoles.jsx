import { useGames } from "../Context/GameContext"
import GameStore from "./Game-store"


function Consoles() {
    const games=useGames()
    const { Consoles, isConsoleLoading }=games
    const slicedData = Consoles?.slice(0,4)
    return (
        <section class="Store-consoles">

            <div class="Store-games-rec">
                 {slicedData?.map((data)=>{
                       return <GameStore data={data}/>
                 })}
            </div>
        </section>
    )
}

export default Consoles
