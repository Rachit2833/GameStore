import { useNavigate } from "react-router-dom"

function PopUp() {
    const navigate =useNavigate()
    return (
        <div className="popUp" style={{ zIndex: "100" }}>
            <div className="row">
                <span> Track Your Order</span>
                <ion-icon name="map-outline"></ion-icon>
            </div>
            <div className="row">
                <span> Request A Return</span>
                <ion-icon name="swap-horizontal-outline"></ion-icon>
            </div>
            <div className="row">
                <span>Installation</span>
                <ion-icon name="construct-outline"></ion-icon>
            </div>
            <div className="row" onClick={()=>{
                navigate("/terms")
            }}>
                <span>Terms & Conditions</span>
                <ion-icon name="document-text-outline"></ion-icon>
            </div>
            <div className="row">
                <span>Nearest Store</span>
                <ion-icon name="storefront-outline"></ion-icon>
            </div>
            <div className="row">
                <span> Contact Us</span>
                <ion-icon name="mail-outline"></ion-icon>
            </div>
        </div>
    )
}

export default PopUp
