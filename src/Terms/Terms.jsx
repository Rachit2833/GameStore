import Footer from "../Home/Footer"
import Navbar from "../Home/Navbar"
import styles from './Terms.module.css'
function Terms() {
   return (
      <>
         <div className="nav-wrap">
            <Navbar />
         </div>
         <div className="abc">
           <div className={styles.main}>
               <h1 className={styles.head}>TERMS OF SERVICE</h1>
               <h2 className={styles.head2}>ACCEPTANCE OF THE TERMS OF SERVICE</h2>
               <p>THE FOLLOWING TERMS AND CONDITIONS (“TERMS”) APPLY TO YOUR USE OF THE WEBSITES OF EPIC GAMES, INC. AND ITS AFFILIATES (“EPIC”, “WE” “US” OR “OUR”), INCLUDING ANY CONTENT, FUNCTIONALITY, PRODUCTS, AND SERVICES OFFERED ON OR THROUGH SUCH WEBSITES (COLLECTIVELY, THE “WEBSITE”), WHETHER AS A GUEST OR A REGISTERED USER. THESE TERMS ALSO APPLY TO YOUR USE OF OTHER EPIC SERVICES THAT DISPLAY OR INCLUDE THESE TERMS (“ADDITIONAL SERVICES”). IN THESE TERMS, THE WEBSITE AND ADDITIONAL SERVICES ARE COLLECTIVELY REFERRED TO AS THE “SERVICES.”</p>
               <p>PLEASE READ THESE TERMS CAREFULLY BEFORE YOU START TO USE THE SERVICES. BY USING THE SERVICES, YOU ACCEPT AND AGREE TO BE BOUND AND ABIDE BY THESE TERMS OF SERVICE. IF YOU DO NOT WANT TO AGREE TO THESE TERMS OF SERVICE, YOU MUST NOT USE THE SERVICES. IN PARTICULAR, WE WANT TO HIGHLIGHT SOME IMPORTANT TERMS, POLICIES, AND PROCEDURES IN THESE TERMS. BY ACCEPTING THESE TERMS:</p>
               <div className={styles.point}>
                  <span>1. You are also agreeing to other Epic rules and policies that are expressly incorporated into and a part of these Terms. Please read them carefully</span>
                    <ul>
                     <li>Our <a href="">Privacy Policy</a> explains what information we collect from you and how we protect it.</li>
                     <li>Our Fan Content Policy explains what you can do with Epic’s Intellectual Property in the content you create.</li>
                    </ul>
                  <span>2. You and Epic agree to resolve disputes between us in individual arbitration (not in court). We believe the alternative dispute-resolution process of arbitration will resolve any dispute fairly and more quickly and efficiently than formal court litigation. We explain the process in detail below, but we’ve put this up front (and in caps) because it’s important:</span>
               </div>
              
               <p style={{ paddingTop: "2rem " }}><i>THESE TERMS CONTAINS A BINDING, INDIVIDUAL ARBITRATION AND CLASS-ACTION WAIVER PROVISION. IF YOU ACCEPT THESE TERMS, YOU AND EPIC AGREE TO RESOLVE DISPUTES IN BINDING, INDIVIDUAL ARBITRATION AND GIVE UP THE RIGHT TO GO TO COURT INDIVIDUALLY OR AS PART OF A CLASS ACTION, AND EPIC AGREES TO PAY YOUR ARBITRATION COSTS FOR ALL DISPUTES OF UP TO $10,000 THAT ARE MADE IN GOOD FAITH (SEE BELOW).</i></p>
               <p><i>TO ENTER INTO THE CONTRACT CREATED BY THESE TERMS, YOU MUST BE AN ADULT OF THE LEGAL AGE OF MAJORITY IN YOUR COUNTRY OF RESIDENCE. YOU ARE LEGALLY AND FINANCIALLY RESPONSIBLE FOR ALL ACTIONS USING OR ACCESSING OUR SOFTWARE, INCLUDING THE ACTIONS OF ANYONE YOU ALLOW TO ACCESS TO YOUR ACCOUNT. YOU AFFIRM THAT YOU HAVE REACHED THE LEGAL AGE OF MAJORITY, UNDERSTAND AND ACCEPT THESE TERMS (INCLUDING ITS DISPUTE RESOLUTION TERMS). IF YOU ARE UNDER THE LEGAL AGE OF MAJORITY, YOUR PARENT OR LEGAL GUARDIAN MUST CONSENT TO THESE TERMS.</i></p>
               <h3>In addition to these Terms, software or services that are included in or otherwise made available to you through the Services may be subject to separate agreement between you and Epic, such as end user license agreements. If these Terms are inconsistent with any such agreements, those agreements will control.</h3>
             
           </div>
         </div>
         <div className="foot-wrap">
            <Footer />
         </div>
         </>
   )
}

export default Terms
