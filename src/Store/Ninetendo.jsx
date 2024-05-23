import { useGames } from "../Context/GameContext"
import GameStore from "./Game-store"

function Ninetendo() {
    const games = useGames()
    const { forUser, isLoading } = games
    const filterData = forUser?.filter((data) => { return data.DeviceSupport == "Nintendo Switch" })
    const slicedData = filterData?.slice(0, 3)
    return (
        <section class="Store-nintendo">
            <div class="Store-games-rec">
               {slicedData?.map((data)=>{
                    return <GameStore data={data} />
               })}
            </div>
        </section>
    )
}

export default Ninetendo
