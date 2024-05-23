import styles from './TimelineConatiner.module.css'
function TimelineComponent({date,status}) {

   return (
      <>
         <div className={styles.tracking}>
            <div style={{ backgroundColor: status === 'Cancelled' ? 'red' : '' }} className={styles.dot}>
               <ion-icon name="checkmark-outline"></ion-icon>
            </div>
            <p>{status}<br /><span>{date}</span></p>
         </div>
         
      
        
         </>
   )
}

export default TimelineComponent
