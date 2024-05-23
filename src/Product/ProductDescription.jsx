import React from 'react';
import "./Product.css"
import { useGames } from '../Context/GameContext';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Review from './Review';
import Patch from './Patch';

function ProductDescription() {
    const games = useGames()
    const [searchParams]=useSearchParams()
    const { radioState, getRandomElementFromArray,setRadioState, forUser,  productData,data} = games
    const colors = ["royalblue", "red","#33b249","#0096FF","#33b249","#33b249","#CF9FFF"]
    const color =getRandomElementFromArray(colors)
    const navigate =useNavigate()
    return (
      
            <section className="information">
            <span className="title-info main-head"> {radioState == "option1" ? "Description" : radioState == "option2" ? "Shipping & Return" : "Reviews"}</span>
                <p className="des">
                {radioState == "option1" ? productData?.Description : radioState == "option2"?"At GamesStore, we strive to ensure your shopping experience is as seamless and satisfying as possible. As part of our commitment to customer satisfaction, we have outlined our shipping and return policies below to provide clarity and transparency.Shipping Information:":<>
                    {data.length === 0 ? <div className={data?.length > 0 ? null : "empty-div"}>
                    <h2 className="empty">No Reviews Yet</h2>
                        <p className="find">

  To maintain authenticity, we only accept reviews from verified buyers. If you've purchased this item, you can share your feedback through the Orders section. </p>
                        <button className="small-btn" onClick={() => {
                            navigate("/orders")
                        }}>
                            Orders
                        </button></div>:  data?.map((indData) => {
                        return <Review data={indData} children={
                            <Patch data={indData?.SpecialTags} />
                    } />
                    })}          
                </>}
                {radioState == "option2" ? <h2 className="title-info">Shipping Information:</h2>:null}
                {radioState == "option2" ? 
                <>
                <div>
                    <h2 className="title-info">1 Shipping Rates and Methods:</h2>
                    <ul>
                        <li>
                            We offer various shipping options to cater to your preferences and urgency.
                        </li>
                        <li>
                            Shipping rates are calculated based on the destination, weight, and size of your order.
                        </li>
                        <li>
                            You can select your preferred shipping method during checkout for accurate pricing.
                        </li>
                    </ul>
                </div> 
                        <div>
                            <h2 className="title-info">2 Order Processing Time:</h2>
                            <ul>
                                <li>
                                    Orders are typically processed within 4 business days of payment confirmation.
                            
                                </li>
                                <li>
                                    Once processed, you will receive a confirmation email with tracking information to monitor the progress of your shipment.
                                </li>
                            </ul>
                        </div> 
                        <div>
                            <h2 className="title-info">3 Shipping Delays:</h2>
                            <ul>
                                <li>
                                    While we strive to ensure timely delivery, unforeseen circumstances such as weather conditions or carrier delays may affect shipping times.
                                </li>
                                <li>
                                    In the event of any delays, we will notify you promptly and work to resolve the issue to the best of our ability.
                                </li>
                            </ul>
                        </div> 
                        <h2 className="title-info"> Return and Exchange Policy:</h2>
                        <ul>
                            <li>We accept returns and exchanges within 15 days of the delivery date.</li>
                            <li>To be eligible for a return or exchange, items must be unused, undamaged, and in their original packaging.</li>
                            <li>To initiate a return or exchange, please contact our customer support team with your order details and reason for return.</li>
                            <li>Once your request is approved, you will receive further instructions on returning the item(s) to us.</li>
                            <li>Refunds will be issued to the original payment method upon receipt and inspection of the returned item(s).</li>
                            <li>Certain items such as personalized or perishable goods may not be eligible for return or exchange unless damaged or defective.</li>
                            <li>Final sale and clearance items are also non-returnable.</li>
                            <li>Customers are responsible for return shipping costs unless the return is due to our error or a defective product.</li>
                        </ul>
                </>
                
                : null}
                </p>
              { radioState ==="option1" ?<p className="des">
                    Lorem Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
                    rem provident fugiat excepturi sit id, quo soluta odit vitae in non
                    at magnam accusantium atque quos. Tempora temporibus, eveniet ratione
                    ipsum sint architecto minima, harum et earum incidunt perferendis esse
                    in omnis error adipisci consectetur facilis dolores dolorum, id dolore.
                    ipsum dolor sit amet consectetur adipisicing elit. Consequatur obcaecati,
                    laboriosam fugit quis ea necessitatibus dolor debitis suscipit doloremque
                    sint nulla vel quisquam nam aliquam soluta ipsam laudantium rerum qui.
                </p>:null}
            {radioState === "option1" ? <table className='table-pro-des'>
                <tbody>
                    <tr>
                        <td className='td-pro-des'>Release Date:</td>
                        <td className='td-pro-des'>{productData?.ReleaseDate}</td>
                    </tr>
                    <tr>
                        <td className='td-pro-des'>Studio:</td>
                        <td className='td-pro-des'>{productData?.Studio}</td>
                    </tr>
                    <tr>
                        <td className='td-pro-des'>Age Required</td>
                        <td className='td-pro-des'>{productData?.AgeRating}+</td>
                    </tr>
                    <tr>
                        <td className='td-pro-des'>Content</td>
                        <td className='td-pro-des'>Game Disk</td>
                    </tr>
                    <tr>
                        <td className='td-pro-des'>Console Supported</td>
                        <td className='td-pro-des'>
                            <ul className='ul-pro'>
                                <li>Play Station 5</li>
                                <li>Play Station 4</li>
                                <li>Nintendo</li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td className='td-pro-des'>Type</td>
                        <td className='td-pro-des'>Physical Disk</td>
                    </tr>
                </tbody>
            </table>:null}
            </section>

    );
}

export default ProductDescription;


//   <Review children={<>
//                      <div className="patch-wrap">
//                             <Patch data={"MustHave"} color={"royalblue"} />
//                             <Patch data={"Love-It"} color={"red"} />
//                      </div>
//                         </>} />
//                 <Review 
//                         children={<>
//                             <div className="patch-wrap">
//                                 <Patch data={"BestValue"} color={"#33b249"} />
//                                 <Patch data={"Wonderful"} color={"#0096FF"} />
//                             </div>
//                         </>} />
//                     <Review children={<>
//                         <div className="patch-wrap">
//                             <Patch data={"BestValue"} color={"#33b249"} />
//                         </div>
//                     </>} />
//                     <Review children={<>
//                         <div className="patch-wrap">
//                             <Patch data={"BestCollection"} color={"#33b249"} />
//                         </div>
//                     </>} />
//                     <Review children={<>
//                         <div className="patch-wrap">
//                             <Patch data={"Killer"} color={"#CF9FFF"} />
//                         </div>
//                     </> }/>
//                 <Review />