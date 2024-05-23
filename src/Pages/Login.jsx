import toast, { Toaster } from "react-hot-toast"
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { useForm } from "react-hook-form";
import { useLogin } from "../Services/useLogin";
import { useGames } from "../Context/GameContext";
import { useEffect } from "react";
function Login() {
   const navigate = useNavigate()
   const games = useGames()
   const { customerId, setCustomerId, session, isSession, } = games

  useEffect(()=>{
     let isAuthenticated = session?.role === "authenticated"
     if (isAuthenticated) {
       navigate("/store")
     }
  },[])



   const queryClient = useQueryClient()
   const { register, reset, handleSubmit } = useForm()






   const { mutate, isLoading } = useMutation({
      mutationFn: (data) => useLogin(data),
      onSuccess: (response) => {
         setCustomerId(response.user.identities[0].user_id)
         localStorage.setItem('CustomerId', response.user.identities[0].user_id);
         queryClient.invalidateQueries(["Session"]);
         navigate("/store");
         toast.success("Login success");
      },
      onError: (error) => {
         console.error("Login error:", error);
         toast.error("Invalid Credentials");
      },
   });




   function onSubmit(data){
     mutate(data)
   }
   function onError(error){
     toast.error("Something went Wrong")
   }
   return (
      <>
      <Toaster />
        <div className={styles["wrapper-signup"]} style={{ backgroundImage: "url('/images/venson-chou-nD2BjSLt0uE-unsplash.jpg')" }}>
            <div className={styles["inner-signup"]}>
                <div className={styles["image-holder-signup"]}>
                    <img className={styles["img-sig"]} src="/images/venson-chou-nD2BjSLt0uE-unsplash.jpg" alt="" />
                </div>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit,onError)}>
                    <h3 className={styles.head_comp}>Welcome Back</h3>
                   
                    
                    <div className={styles["form-wrapper-signup"]}>
                        <input type="text" placeholder="Email Address" className={styles["form-control-signup"]} {...register("Email", {
                            required: "This Field is Required"
                        })} />
                        <input type="text" placeholder="Password" className={styles["form-control-signup"]} {...register("Password", {
                            required: "This Field is Required"
                        })} />
                        <i className={`zmdi zmdi-email ${styles.icon}`}></i>
                    </div>
                    {/* Remaining JSX */}
                  <div style={{display:"flex"}}>
                     <button className={styles["button"]}>Login <i className={`zmdi zmdi-arrow-right ${styles.icon}`}></i></button>
                     <button onClick={()=>{
                        navigate("/signup")
                     }} className={styles["button"]}>Register<i className={`zmdi zmdi-arrow-right ${styles.icon}`}></i></button>
           
                  </div>
               </form>
            </div>
        </div>
    </>
   )
}

export default Login
