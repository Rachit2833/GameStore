import React, { useEffect } from 'react';
import styles from "./style.module.css"; // Importing CSS Modules
import { useForm } from 'react-hook-form';
import { registerUser } from '../Services/registerUser';
import { useMutation, useQueryClient } from 'react-query';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useGames } from '../Context/GameContext';

function SignUp() {



    const navigate = useNavigate()
    const games=useGames()
    const { customerId, setCustomerId, session, isSession, } =games

    useEffect(() => {
        let isAuthenticated = session?.role === "authenticated"
        if (isAuthenticated) {
            navigate("/store")
        }
    }, [])

    const queryClient =useQueryClient()
    const { mutate, isLoading } = useMutation({
        mutationFn: (data) => registerUser(data),
        onSuccess: (response) => {

            setCustomerId(response.user.identities[0].user_id)
            localStorage.setItem('CustomerId', response.user.identities[0].user_id );

            queryClient.invalidateQueries(["Session"]);
            queryClient.invalidateQueries(["UserData"]);
            navigate("/store");
            toast.success("Login success");
        },
        onError: (error) => {
            console.error("Login error:", error);
            toast.error("Invalid Credentials");
        },
    });
    const {register,reset,handleSubmit} =useForm()
    function onSubmit(data){
        
        mutate(data)

    }
    function onError(){
        reset()
    }
    function loading(text){
        toast.loading(text)
    }
    return (
  <>
  {isLoading? ()=>{
    loading("Signing Up")
  }:null}
  <Toaster />
        <div className={styles["wrapper-signup"]} style={{ backgroundImage: "url('/images/venson-chou-nD2BjSLt0uE-unsplash.jpg')" }}>
            <div className={styles["inner-signup"]}>
                <div className={styles["image-holder-signup"]}>
                    <img className={styles["img-sig"]} src="/images/venson-chou-nD2BjSLt0uE-unsplash.jpg" alt="" />
                </div>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit,onError)}>
                    <h3 className={styles.head_comp}>Registration Form</h3>
                    <div className={styles["form-group-signup"]}>
                        <input type="text" placeholder="First Name" className={styles["form-control-signup"]} {...register("FirstName", {
                            required: "This Field is Required"
                        })} />
                        <input type="text" placeholder="Last Name" className={styles["form-control-signup"]} {...register("LastName", {
                            required: "This Field is Required"
                        })} />
                    </div>
                    <div className={styles["form-wrapper-signup"]}>
                        <input type="text" placeholder="Phone Number" className={styles["form-control-signup"]} {...register("PhoneNumber", {
                            required: "This Field is Required"
                        })} />
                        <i className={`zmdi zmdi-account ${styles.icon}`}></i>
                    </div>
                    <div className={styles["form-wrapper-signup"]}>
                        <input type="text" placeholder="Email Address" className={styles["form-control-signup"]} {...register("Email", {
                            required: "This Field is Required"
                        })} />
                        <input type="text" placeholder="Password" className={styles["form-control-signup"]} {...register("Passsword", {
                            required: "This Field is Required"
                        })} />
                        <i className={`zmdi zmdi-email ${styles.icon}`}></i>
                    </div>
                    {/* Remaining JSX */}
                   <div style={{display:"flex"}}>
                            <button className={styles["button"]}>Register <i className={`zmdi zmdi-arrow-right ${styles.icon}`}></i></button>
                            <button onClick={()=>{
                                navigate("/login")
                            }} className={styles["button"]}>Login <i className={`zmdi zmdi-arrow-right ${styles.icon}`}></i></button>
                   </div>
                </form>
            </div>
        </div>
    </>
    );
}

export default SignUp;
