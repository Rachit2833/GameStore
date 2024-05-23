import React, { useEffect } from 'react';
import "./Timeline"
import styles from './TimelineConatiner.module.css'
import TimelineComponent from './TimelineComponent';
import { useGames } from '../Context/GameContext';
import OrderItem from '../Orders/OrderItem';

function TimelineConatiner() {
   const games = useGames();
   const { trackingData, setTrackingtData } = games;

   useEffect(() => {
      const storedOrderData = localStorage.getItem("orderTrackingData");
      if (storedOrderData) {
         setTrackingtData(JSON.parse(storedOrderData));
      }
   }, [setTrackingtData]);

   return (
      <div className={styles.container}>
         <div className={styles.row}>
            <div className={styles.main}>
               <div className={styles.wrapper}>
                  {trackingData?.Tracking?.map((data, index) => {
                     const newData = JSON.parse(data);

                     return (
                        <TimelineComponent key={index} date={newData.date} status={newData.details} />
                     );
                  })}
               </div>
            </div>
         </div>



         {trackingData && <OrderItem data={trackingData} />}
      </div>
   );
}

export default TimelineConatiner;
