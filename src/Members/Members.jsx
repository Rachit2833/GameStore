import { useState } from 'react'
import Footer from '../Home/Footer'
import Navbar from '../Home/Navbar'
import Form from './Form'
import styles from './Members.module.css'
function Members() {
    const [isFormOpen ,setIsFormOpen] =useState(false)
    return (
        <>
        <div className="nav-wrap">
            <Navbar />
        </div>

            <div className="abc">
                {isFormOpen ? <Form setIsFormOpen={setIsFormOpen} /> :null}
                <div className={styles.img_div}>

                        <h2 className={styles.head}>Members get more</h2>
                        <p className={styles.para}>Shop now and pay later, collect points on every purchase and enjoy exclusive discounts,
                            rewards and events. Join today to access our world of fashionable benefits
                            and enjoy 10% off your first purchase when you spend £20</p>


                  <button onFocus={true} className={styles.Button} onClick={()=>{
                    setIsFormOpen(true)
                  }}>Join Now</button>
                 </div>
         
                    <div className={styles.benifits_div}>
                    <h1 className={styles.head_comp}>Some of our membership perks:</h1>
                    <ul className={styles.benifits}>
                        <li className={styles.listItem}>Collect points on every purchase: £1 = 1 point</li>
                        <li className={styles.listItem}>Get 10% off when you join and spend £20</li>
                        <li className={styles.listItem}>Bonus Vouchers: You will receive £3 off for every 100 points you collect</li>
                        <li className={styles.listItem}>Free Click & Collect over £20</li>
                        <li className={styles.listItem}>Free standard delivery when you spend £20 or more</li>
                        <li className={styles.listItem}>Shop now and pay later with Klarna</li>
                        <li className={styles.listItem}>Exclusive discounts and early access to selected collections</li>
                        <li className={styles.listItem}>Digital receipts</li>
                        <li className={styles.listItem}>25% off your favourite item on your birthday</li>
                        <li className={styles.listItem}>Invite your friends to become members and earn points</li>
                        <li className={styles.listItem}>Collect Conscious points for making sustainable choices</li>
                        <li className={styles.listItem}>Shop now and pay later with Klarna</li>
                        </ul>
                    </div>
            
             
             <div className={styles.discount}>
                    <div className={styles.discount_inner}>
                        <h2 className={styles.discount_head}>Not a member yet?</h2>
                        <h2 className={styles.discount_dis}>Become a Member and get 10% off when you join and spend £20</h2>
                    </div>

             </div>

             <div className={styles.howItWorks_wrapper}>
                  <div className={styles.white}>
                        <div className={styles.HIW_Top}>
                            <h2 className={styles.HIW_head}>How it works.?</h2>
                            <p className={styles.HIW_des}>GameStore Membership is a free digital loyalty programme accessible via the GameStore app or at GameStore.com where members collect points on every purchase and enjoy exclusive benefits.</p>
                        </div>
                        <div className={styles.HIW_Card_Wrapper}>
                            <div className={styles.HIW_Card}>
                                <h2 className={styles.HIW_icon}><ion-icon name="person-outline"></ion-icon></h2>
                                <h2 className={styles.HIW_Card_head}>How to join.</h2>
                                <p className={styles.HIW_Card_des}>
                                    Simply join our membership by creating an account via the GamesStore app or at GamesStore.com.
                                </p>
                            </div>
                            <div className={styles.HIW_Card}>
                                <h2 className={styles.HIW_icon}><ion-icon name="flower-outline"></ion-icon></h2>
                                <h2 className={styles.HIW_Card_head}>Collect points.</h2>
                                <p className={styles.HIW_Card_des}>
                                    Collect points on every purchase, by completing your membership profile and inviting your friends to become members. You can also collect
                                    For every 100 points you collect, you unlock a £3 Bonus Vouchers that you can use for your next purchase!
                                </p>
                            </div>
                            <div className={styles.HIW_Card}>
                                <h2 className={styles.HIW_icon}><ion-icon name="gift-outline"></ion-icon></h2>
                                <h2 className={styles.HIW_Card_head}>How to redeem your offers.</h2>
                                <p className={styles.HIW_Card_des}>
                                    When shopping in store, simply select the reward you'd like to use under the My Account tab in the GameStore app and show it to the cashier. When shopping online, select the reward you'd like to use during checkout and your reward will automatically be applied to your shopping basket.
                                </p>
                            </div>
                            <div className={styles.HIW_Card}>
                                <h2 className={styles.HIW_icon}><ion-icon name="person-add-outline"></ion-icon></h2>
                                <h2 className={styles.HIW_Card_head}>Become a Plus member!</h2>
                                <p className={styles.HIW_Card_des}>
                                    Earn more points — get more out of your membership! As a Plus member you’ll enjoy even more benefits, such as free standard delivery, exclusive experiences, early access to limited collections, surprise Plus offers and much more! Unlock your Plus membership by collecting 300 points within one membership year.
                                </p>
                            </div>
                        </div>
                  </div>
             </div>
                <div className={styles.plus_div}>
                    <div className={styles.plus_Top}>
                        <h2 className={styles.plus_head}>The Membership</h2>
                        <p className={styles.plus_des}>More — that's what our membership is all about. The more points you collect, the more benefits you get!</p>
                    </div>
                    <div className={styles.normal}>
                        <h1 className={styles.head_comp} style={{color:"gray",textAlign:"left" ,marginLeft:"3rem "}}>Member benefits:</h1>
                        <ul  className={styles.Normal_benifit} >
                            <li className={styles.listItem} style={{color:"gray",textAlign:"left"}}>Collect points on every purchase: £1 = 1 point</li>
                            <li className={styles.listItem} style={{color:"gray",textAlign:"left"}}>Get 10% off when you join and spend £20</li>
                            <li className={styles.listItem} style={{color:"gray",textAlign:"left"}}>Bonus Vouchers: You will receive £3 off for every 100 points you collect</li>
                            <li className={styles.listItem} style={{color:"gray",textAlign:"left"}}>Free Click & Collect over £20</li>
                            <li className={styles.listItem} style={{color:"gray",textAlign:"left"}}>Free standard delivery when you spend £20 or more</li>

                        </ul>

                    </div>
                    <div className={styles.Plus}>
                        <h1 className={styles.head_comp} style={{ color:"red",textAlign: "left", marginLeft: "3rem " }}>Plus Member Benefits:</h1>
                        <ul className={styles.Normal_benifit} >
                            <li className={styles.listItem} style={{color:"red",textAlign:"left"}}>Collect points on every purchase: £1 = 1 point</li>
                            <li className={styles.listItem} style={{color:"red",textAlign:"left"}}>Get 10% off when you join and spend £20</li>
                            <li className={styles.listItem} style={{color:"red",textAlign:"left"}}>Bonus Vouchers: You will receive £3 off for every 100 points you collect</li>
                            <li className={styles.listItem} style={{color:"red",textAlign:"left"}}>Free Click & Collect over £20</li>
                            <li className={styles.listItem} style={{color:"red",textAlign:"left"}}>Free standard delivery when you spend £20 or more</li>
                            <li className={styles.listItem} style={{ color:"red",textAlign: "left" }}>Collect points on every purchase: £1 = 1 point</li>
                            <li className={styles.listItem} style={{ color:"red",textAlign: "left" }}>Get 10% off when you join and spend £20</li>
                            <li className={styles.listItem} style={{ color:"red",textAlign: "left" }}>Bonus Vouchers: You will receive £3 off for every 100 points you collect</li>
                            <li className={styles.listItem} style={{ color:"red",textAlign: "left" }}>Free Click & Collect over £20</li>
                            <li className={styles.listItem} style={{ color:"red",textAlign: "left" }}>Free standard delivery when you spend £20 or more</li>

                        </ul>
              
                    </div>
                </div>

            </div>


            <div className="foot-wrap">
                <Footer />
            </div>
        </>
    )
}

export default Members

