import { useNavigate } from "react-router-dom"
import { useGames } from "../Context/GameContext"
import { useMutation, useQueryClient } from "react-query"
import { useLogout } from "../Services/useLogout"
import toast from "react-hot-toast"

function Profile() {
    const queryClient =useQueryClient()
    const games = useGames()
    const { userData, isLoadingUserData,setCustomerId } = games
    const navigate =useNavigate()
    console.log( userData[0]?.EmailAddress)
    const {mutate,isLoading}=useMutation({
        mutationFn:()=>{
            useLogout()
        },
        onSuccess:()=>{
            // Remove data from local storage
            localStorage.removeItem('CustomerId');
            
            queryClient.invalidateQueries(["Session"])
            navigate("/login")
            toast.success("Successfully Logged Out ")
        },
        onError:(error)=>{
            toast.error(error.message)
        }

    })


    return (
        <div className="wraper-profile">
            <div className="gmail">
                <h2 className="mail-profile">{userData[0]?.EmailAddress}</h2>
            </div>
            <div className="profile-sec">
                <img className="profile-img" src={ userData[0]?.ImageURL } alt="" />
                <h2 className="name-profile">Hi, {userData[0]?.Name}</h2>
                <button className="Account-button">Manage Your GameStore Account</button>
            </div>
            <div className="buttons" style={{margin:"2rem 0"}}>
                <button onClick={()=>{
                    navigate("/address")
                }} className="left-Button profile-btn"><ion-icon className="icon-brtn" name="home-outline"></ion-icon> Address</button>
                <button onClick={()=>{
                    mutate()
                }} className="rignt-Button profile-btn"><ion-icon className="icon-brtn" name="log-out-outline"></ion-icon>Sign Out</button>
            </div>
            <div className="foot">
                <p>Privacy Policy </p>

                <p>Terms Of Service</p>
            </div>
        </div>
    )
}

export default Profile
