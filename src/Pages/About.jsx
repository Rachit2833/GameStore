import { useGames } from '../Context/GameContext'
import Featured from '../Home/Featured'
import Footer from '../Home/Footer'
import Navbar from '../Home/Navbar'
import Reviews from '../Home/Reviews'
import styles from './About.module.css'
function About() {
    const games = useGames()
    const { session, isSession, } = games
    return (
        <>
         <div className="nav-wrap" >
                <Navbar />
       </div>
       <div className="abc">
                <div className={styles.main_div}>
                    <h2 className={styles.head_comp}>Where Gaming Is Beyond The Screen</h2>
                </div>
                <div className={styles.info}>
                    <h2 className={styles.head_sec}><a href="#">Check out our latest company news!</a></h2>
                </div>
                <div>
                <div className={styles.intro}>
                        <h2 className={styles.head_div}>

                            Unleash Your Gaming Passion, Build a Fulfilling Career, Escape Daily Stress
                        </h2>
                        <p className={styles.des_div}>
                            Embark on a journey where gaming isn't just a pastime but a promising career path and a sanctuary from life's daily pressures. Dive into the world of gaming, where your skills can pave the way to exciting opportunities and a fulfilling livelihood. Whether you're seeking an escape from the monotony of everyday life or dreaming of turning your gaming prowess into a profession, we're here to guide you every step of the way.
                        </p>
                        <div className={styles.video_grid}>
                            <iframe className={styles.video} src="https://www.youtube.com/embed/vprceVIJ0po?si=zoHmGdN-REi2ouXK&amp;start=2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                          <div className={styles.des_part}>
                                <h2 style={{textAlign:"start",margin:"0"}} className={styles.head_div}>
                                    Gaming As Career!
                                </h2>
                                <p className={styles.para}>Discover how your love for gaming can open doors to diverse career paths, from professional esports athlete to game developer, content creator, or industry analyst. Let gaming be your sanctuary, offering moments of exhilaration, camaraderie, and achievement amidst the chaos of the world. Join us as we explore the endless possibilities that gaming presents, empowering you to embrace your passion and carve out a fulfilling future.</p>
                          </div>
                          <div className={styles.icon_div}>
                                <h2><ion-icon name="chevron-forward-outline"></ion-icon></h2>
                          </div>
                        </div>
                </div>
                </div>
                <div className={styles.intro}>
                    <h2 className={styles.head_div}>

                        Creating impact around the world
                    </h2>
                    <p className={styles.des_div}>
                        "Experience the global phenomenon firsthand by joining our esports workshop, a game-changer that has made waves across the world!
                    </p>
                    <img className={styles.work_img} src="/images/cover-rmP3uV3DY4jswE2HwKBn1YinZ9UDj3kt.png" alt="" />
                      <button className={styles.work_button}>Join Now</button>
                    <h2 style={{marginTop:"4rem"}} className={styles.head_div}>Reviews From Participants</h2>

                       <div className={styles.about_testimonial}>
                       
                        <Reviews />
                        <Reviews />
                        <Reviews />
                        <Reviews />
                        <Reviews />
                        <Reviews />
                       </div>
                     
                </div>
                <Featured />
       </div>

            <div className="foot-wrap">
                <Footer />
            </div>
        </>
    )
}


export default About
