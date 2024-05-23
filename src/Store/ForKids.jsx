import { useGames } from "../Context/GameContext"
import GameStore from "./Game-store"
import Heading from "./Heading"

function ForKids() {
    const games = useGames()
    const { forUser, isLoading } = games
    const filtereData = forUser?.filter((data)=>{
        return data.AgeRating<13
    })
    const slicedData= filtereData?.slice(0,4)

    return (
        <section class="Store-kids">
            <Heading heading={"Kids Collection"} />
            <div class="Store-games-rec">
               {slicedData?.map((data)=>{
                    return <GameStore data={data} />
               })}
           </div>
        </section>
          
    )
}

export default ForKids
