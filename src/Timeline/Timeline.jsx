
import { useEffect } from 'react';
import TimelineContainer from './TimelineConatiner'
import { useSearchParams } from 'react-router-dom';
import { useGames } from '../Context/GameContext';
import TimelineComponent from './TimelineComponent';
import styles from './TimelineConatiner.module.css'
function Timeline() {
   
   const [searchParams] = useSearchParams()
   useEffect(() => {


   }, []);
   return (

         <>
     
            <TimelineContainer />
         </>

   )
}

export default Timeline
