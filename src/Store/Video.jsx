import { useState } from "react";
import { useGames } from "../Context/GameContext"
import toast from "react-hot-toast";

function Video({data}) {
   const [videoPlaying, setVideoPlaying] = useState(false);
   const  games =useGames()
   const { onHover, setOnHover, isOnPlayControl, setIsOnPlayControl }=games

   return (
      <div>

         <video 
          onMouseEnter={() => {(setOnHover(true))}} 
          onPlay={()=>{setVideoPlaying(true)}} 
          onPause={()=>{setVideoPlaying(false)}}
          onEnded={()=>{ toast.success("Double anywhere click to exit")}}
          style={{ position:"fixed",bottom:"0",right:"0",height:"40rem",width:"40rem",padding:" 0 4rem ",}} controls autoPlay>
            <source src={data?.Trailer} type="video/mp4" />
            Your browser does not support the video tag.
         </video>
      </div>
   )
}

export default Video
