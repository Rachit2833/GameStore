import { useQuery } from "react-query"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { getUser } from "../Services/getUser"
import { useGames } from "../Context/GameContext"
import toast from "react-hot-toast"


function ProtectedRoutes({ children }) {

   const navigate = useNavigate()
   const games=useGames()
   const { session, isSession, } =games
   
   
   let isAuthenticated = session?.role === "authenticated"

 


   if (!isAuthenticated && !isSession) {

      navigate("/login")
   }
   if (isAuthenticated) {
      return children
   }
}

export default ProtectedRoutes
