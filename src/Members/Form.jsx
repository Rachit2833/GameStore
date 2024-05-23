import toast from 'react-hot-toast'
import styles from './Members.module.css'
function Form({setIsFormOpen}) {
    return (
        <div class={styles.container}>
            <span className={styles.Close} onClick={()=>{
                setIsFormOpen(false)
            }}><ion-icon name="close-outline"></ion-icon></span>
            <form class={styles.form_member} id="gmailForm">
                <h2 className={styles.head_Form}>Please enter your Gmail address:</h2>
                <input className={styles.abc} type="email" id="email" name="email" placeholder="example@gmail.com" required />
               
             <div className={styles.button_div}>
                    <input className={styles.xyz} type="submit" value="Submit" onClick={(e)=>{
                        e.preventDefault()
                        setIsFormOpen(false)
                        toast.success("You're all set")
                    }} />
                    <input style={{backgroundColor:"gray"}} className={styles.xyz} type="submit" value="Close" onClick={()=>{
                        setIsFormOpen(false)
                    }} />
             </div>
            </form>
        </div>
    )
}

export default Form
