import { useQuery } from "react-query"
import GameStore from "./Game-store"
import Heading from "./Heading"
import { getUserGames } from "../Services/getUserGame"
import { useGames } from "../Context/GameContext"
import toast from "react-hot-toast"

function ForUser() {

     const games =useGames()
    const { forUser, isLoading, orderData } =games
    const abc = orderData.map((data) => {
        console.log(data.Games.Name)
        return data.Games.Category;
    });
    const filteredData = forUser.filter((data) => abc.includes(data.Category));


    return (
        <section class="Store-you-might-like">
            <Heading heading={"You might like"} />
            <div class="Store-games-rec">
                {filteredData.map((data,index) => (
                    index < 4 ? <GameStore key={data.id} data={data} /> :null
                ))}

            </div>
        </section>
    )
}

export default ForUser
