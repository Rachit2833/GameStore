import { useNavigate } from "react-router-dom"
import { useGames } from "../Context/GameContext"
import toast from "react-hot-toast"

function PrivateRoute({children}) {
  const games =useGames()
  const naviagte =useNavigate()
   const { userData , isLoadingUserData }=games
   if (userData[0]?.Role ==="Normal_User"){
        naviagte("/")
        toast.error("Can't Access This Part")
      return null
    }else{
      return children
    }
}

export default PrivateRoute
