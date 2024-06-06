import { useNavigate } from "react-router-dom"
import { useGames } from "../Context/GameContext"
import toast from "react-hot-toast"

function PrivateRoute({children}) {
  const games =useGames()
  const naviagte =useNavigate()
   const { userData , isLoadingUserData }=games

  if (!userData[0]?.Role === "Developer" && !isLoadingUserData || !userData[0]?.Role){
   
    console.log(userData, userData[0]?.Role, "dhdbjhkenjkfne");
    naviagte("/store")
    toast.error("Can't Access This Part")
  } else if(userData[0]?.Role == "Developer" && !isLoadingUserData){
    console.log(userData, userData[0]?.Role, "dhdbjhkenjkfne");
    return children

    }
}

export default PrivateRoute
