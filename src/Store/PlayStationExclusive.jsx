import { useSearchParams } from "react-router-dom"
import { useGames } from "../Context/GameContext"
import GameStore from "./Game-store"
import Heading from "./Heading"

function PlayStationExclusive() {
    const games= useGames()
    const [searchParams ]=useSearchParams()
    const { forUser, isLoading } = games
   
   const filterData= forUser?.filter((data)=>{ return data.DeviceSupport ==="PlayStation" })
   const slicedData= filterData?.slice(12,16)
   console.log(slicedData);
    return (
        <section class="Store-playstation">
            <Heading heading={"PlayStation Corner "} />
            <div className="Store-games-rec">
                 {slicedData?.map((data)=>{
                   return <GameStore data={data} />
                 })}
            </div>
        </section>
    )
}

export default PlayStationExclusive
