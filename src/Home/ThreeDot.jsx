import { useNavigate } from "react-router-dom"

function ThreeDot() {
    const navigate =useNavigate()
    return (
        <div className="three" style={{ zIndex: "100" }}>
            <div className="three-row">
                <span>Share your experience </span>
            </div>
            <div className="three-row">
                <span onClick={()=>{
                    navigate("/member")
                }}>Become a member</span>
            </div>
            <div className="three-row">
                <span>Terms of service</span>
            </div>
        </div>
    )
}

export default ThreeDot
