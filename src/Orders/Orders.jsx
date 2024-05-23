import CartItems from '../Cart/CartItems'
import { useGames } from '../Context/GameContext'
import Footer from '../Home/Footer'
import Navbar from '../Home/Navbar'
import OrderItem from './OrderItem'
import OrderLayout from './OrderLayout'


function Orders() {
    const games =useGames()
    const { orderData, isOrderLoading } =games

    return (
        <>
            <div className="nav-wrap" >
                <Navbar />
            </div>

               <div style={{padding:"2rem"}} className="abc">
               <OrderLayout />
               
               </div>
                  

            <div className="foot-wrap" style={{ minWidth: "120rem" }}>
                <Footer />
            </div>
        </>
    )
}

export default Orders
