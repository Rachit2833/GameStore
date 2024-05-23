import { useForm } from 'react-hook-form';
import styles from './styles.module.css';
import { useMutation } from 'react-query';
import { sendMail } from '../Services/sendMail';
import { useRef } from 'react';
import emailjs from "@emailjs/browser";
import toast from 'react-hot-toast';
function Contact() {
   const form = useRef();
   const {mutate,isLoading}=useMutation({
      mutationFn:(data)=>{
         const templateParams ={
            from_name:data.Name,
            from_email:data.Email,
            to_name:"GameStore",
            message: data.Message
         }
         console.log(templateParams,);
         emailjs
            .send("service_zeaj4dm", "template_zf8vqt8", templateParams , {
               publicKey: "aOInDpF-_EcA_GfIH",
            })
            .then(
               () => {
                  console.log('SUCCESS!');
               },
               (error) => {
                  console.log('FAILED...', error.text);
               },
            );
      },
      onSuccess:()=>{
         toast.success("You're all set")
      },
      onError:()=>{
         toast.error("Something Went Wrong")
      }
   })
   function onSubmit(data){

        mutate(data)
   }
   function onError(error){
      console.error(error);
   }
   const { handleSubmit, register, reset } = useForm();
   return (
      <>
         
      <div style={{ backgroundColor:"#f4eefc"}} className={styles.container}>
         <span className={styles['big-circle']}></span>
         <img src="public/images/shape.png" className={styles.square} alt="" />
         <div className={styles.form}>
            <div className={styles['contact-info']}>
               <h3 className={styles.title}>Let's get in touch</h3>
               <p className={styles.text}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  dolorum adipisci recusandae praesentium dicta!
               </p>

               <div className={styles.info}>
                  <div className={styles.information}>
                     <img src="public/images/location.png" className={styles.icon} alt="" />
                     <p>92 Cherry Drive Uniondale, NY 11553</p>
                  </div>
                  <div className={styles.information}>
                     <img src="public/images/email.png" className={styles.icon} alt="" />
                     <p>lorem@ipsum.com</p>
                  </div>
                  <div className={styles.information}>
                     <img src="public/images/phone.png" className={styles.icon} alt="" />
                     <p>123-456-789</p>
                  </div>
               </div>

               <div className={styles['social-media']}>
                  <p>Connect with us :</p>
                  <div className={styles['social-icons']}>
                     <a href="#">
                        <i className="fab fa-facebook-f"></i>
                     </a>
                     <a href="#">
                        <i className="fab fa-twitter"></i>
                     </a>
                     <a href="#">
                        <i className="fab fa-instagram"></i>
                     </a>
                     <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                     </a>
                  </div>
               </div>
            </div>

            <div className={styles['contact-form']}>
               <span className={styles.circle + ' ' + styles.one}></span>
               <span className={styles.circle + ' ' + styles.two}></span>

               <form ref={form} autoComplete="off" onSubmit={handleSubmit(onSubmit)}  >
                  <h3 className={styles.title}>Contact us</h3>
                  <div className={styles['input-container']}>
                     <input type="text" name="name" className={styles.input} {...register("Name",{
                        required:"This field is required"
                     })} placeholder='Name'/>
                    
                  </div>
                  <div className={styles['input-container']}>
                     <input type="email" name="email" className={styles.input} {...register("Email", {
                        required: "This field is required"
                     })} placeholder='Email' />
                   
                  </div>
                  <div className={styles['input-container']}>
                     <input type="tel" name="phone" className={styles.input} {...register("Phone", {
                        required: "This field is required"
                     })} placeholder='Phone Number'/>
                     
                  </div>
                  <div className={styles['input-container'] + ' ' + styles.textarea}>
                     <textarea name="message" className={styles.input} {...register("Message", {
                        required: "This field is required"
                     })} placeholder='Message'></textarea>
                   
                  </div>
                  <input type="submit" value="Send" className={styles.btn} />
               </form>
            </div>
         </div>
      </div>
      </>
   )
}

export default Contact;
