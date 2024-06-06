import { useGames } from '../Context/GameContext';
import Footer from '../Home/Footer';
import Navbar from '../Home/Navbar';
import styles from './Community.module.css';

function Community() {
    const games = useGames()
    const { session, isSession, } = games
    return (
        <>
            <div className="nav-wrap">
                <Navbar />
            </div>

            <div className="abc">
                <div className={styles.arc}>
                    <div className={styles.image_div}>
                        <div className={styles.hero_intro}>
                            <h2 className={styles.hero_intro_head}>
                                In community, we understand the weight of our responsibility, weaving together the fabric of support and empathy.
                            </h2>
                        </div>
                        <img className={styles.image} src="/images/19198057.jpg" alt="" />
                    </div>
                </div>
                <div className={styles.intro}>
                    <h2 className={styles.head_div}> "As a player-focused company, we hope to create game experiences that are meaningful to players, and also hope to help improve the world they live in by serving and investing in the communities we’re a part of."</h2>
                    <p className={styles.des_div}>
                        At gameStore, we're not just about gaming; we're about making a difference. We believe in the power of passion, vision, and perseverance to change the world for the better. That's why we're dedicated to creating exceptional gaming experiences while also giving back to our players, partners, employees, and communities.
                    </p>
                    <p className={styles.des_div}>
                        As part of our core values, we also recognize the importance of providing long-term value and fostering positive impacts for players, partners, gameStore employees, and the communities we engage with.
                    </p>
                    <p className={styles.des_div}>
                        Through our commitment to corporate social responsibility, we aim to contribute to the betterment of our world and communities. Our social impact initiatives are designed to address issues that resonate deeply with our players and communities. Currently, our programs are centered around four key pillars:
                    </p>
                    <div className={styles.impact}>
                        <div className={styles.ipc}>
                            <img className={styles.img} src="/images/413144-PDTI0Y-350.jpg" alt="" />
                            <h2 className={styles.impact_head}>Education and Empowerment: </h2>
                            <p className={styles.impact_des}>We believe in the transformative power of education. We're committed to providing resources and opportunities that empower individuals, particularly those from underprivileged backgrounds, to unlock their full potential. From scholarships and mentorship programs to initiatives promoting digital literacy and STEM education, we strive to create pathways for success and personal growth.</p>
                        </div>
                        <div className={styles.ipc}>
                            <img className={styles.img} src="/images/clay-banks-LjqARJaJotc-unsplash.jpg" alt="" />
                            <h2 className={styles.impact_head}>Diversity and Inclusion </h2>
                            <p className={styles.impact_des}>In gaming and beyond, diversity is our strength. We're dedicated to fostering inclusive environments where everyone feels valued, respected, and empowered to contribute. Through partnerships with organizations promoting diversity in tech and gaming, as well as internal initiatives focused on diversity training and recruitment, we're working to create a more inclusive industry and society.</p>
                        </div>
                        <div className={styles.ipc}>
                            <img className={styles.img} src="/images/noah-buscher-x8ZStukS2PM-unsplash.jpg" alt="" />
                            <h2 className={styles.impact_head}>Environmental Sustainability:</h2>
                            <p className={styles.impact_des}>As stewards of the planet, we recognize the importance of protecting the environment for future generations. We're committed to reducing our environmental footprint through sustainable practices across our operations, from packaging and shipping to energy consumption and waste management. Additionally, we support environmental conservation efforts through partnerships with organizations dedicated to preserving biodiversity and combating climate change.</p>
                        </div>
                        <div className={styles.ipc}>
                            <img className={styles.img} src="/images/hannah-busing-Zyx1bK9mqmA-unsplash.jpg" alt="" />
                            <h2 className={styles.impact_head}>Community & Well-being: </h2>
                            <p className={styles.impact_des}>Strong communities are the foundation of a thriving society. We're dedicated to supporting the well-being of the communities where we operate, both online and offline. Through volunteer initiatives, charitable donations, and partnerships with local organizations, we're working to address pressing social issues, promote mental health and wellness, and build stronger, more resilient communities for all.</p>
                        </div>
                    </div>
                </div>
                <h2 style={{ width: "100%" }} className={styles.head_div}>Our Initiatives</h2>
                <div style={{backgroundColor:"lightgray"}} className={styles.Initiatives}>
                    <div className={styles.grid_item}>
                        <div className={styles.imageContainer}>
                            <img className={styles.img_in} src="/images/joel-muniz-BlnpElo7clE-unsplash.jpg" alt="" />
                            <div className={styles.pop_up}>
                                <span className={styles.name}>COVID Relief</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.grid_item}>
                        <div className={styles.imageContainer}>
                            <img className={styles.img_in} src="/images/tyler-casey-ficbiwfOPSo-unsplash.jpg" alt="" />
                            <div className={styles.pop_up}>
                                <span className={styles.name}>Sustainability</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.grid_item2}>
                        <div className={styles.imageContainer}>
                            <img className={styles.img_in} src="/images/markus-winkler-4oc8J17cit0-unsplash.jpg" alt="" />
                            <div className={styles.pop_up}>
                                <span className={styles.name}>Racial Equity</span>
                            </div>
                        </div>
                        <div className={styles.imageContainer}>
                            <img className={styles.img_in} src="/images/katt-yukawa-K0E6E0a0R3A-unsplash.jpg" alt="" />
                            <div className={styles.pop_up}>
                                <span className={styles.name}>Fundraisers</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.grid_item2}>
                        <div className={styles.imageContainer}>
                            <img className={styles.img_in} src="/images/santi-vedri-O5EMzfdxedg-unsplash.jpg" alt="" />
                            <div className={styles.pop_up}>
                                <span className={styles.name}>Financial Aids</span>
                            </div>
                        </div>
                        <div className={styles.imageContainer}>
                            <img className={styles.img_in} src="/images/subtle-cinematics-VHt_sWcj70I-unsplash.jpg" alt="" />
                            <div className={styles.pop_up}>
                                <span className={styles.name}>Clean Oceon Project</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.awards}>
                    <h2 style={{ width: "100%" }} className={styles.head_div}>Awards & Recognition</h2>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>PR News Social Impact Awards - CSR Team of the Year (2022)</li>
                        <li className={styles.listItem}>Fast Company’s World Changing Ideas List’s Corporate Social Responsibility category for the Sentinels of Light social impact campaign (2022)</li>
                        <li className={styles.listItem}>Engage for Good’s Best Consumer Donation Initiative (2021)</li>
                        <li className={styles.listItem}>Engage for Good's Halo Award Best Consumer-Activated Corporate Donation Campaign (2019)</li>
                    </ul>
                </div>
            </div>

            <div className="foot-wrap" style={{ minWidth: "120rem" }}>
                <Footer />
            </div>
        </>
    );
}

export default Community;
