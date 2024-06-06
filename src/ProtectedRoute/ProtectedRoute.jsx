import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGames } from "../Context/GameContext";
import toast from "react-hot-toast";

function ProtectedRoutes({ children }) {
   const navigate = useNavigate();
   const games = useGames();
   const { session, isSession } = games;
   const isAuthenticated = session?.role === "authenticated";

   useEffect(() => {
      if (!isAuthenticated ) {
         navigate("/login");
      }
   }, [isAuthenticated, navigate]);

   // Render the children only if authenticated
   return isAuthenticated ? children : null;
}

export default ProtectedRoutes;
