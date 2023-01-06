import Head from 'next/head'
import React, { useEffect } from 'react'
import Footer from '../../Components/Common/Footer'
import NavBar from '../../Components/Common/NavBar'
import { sliderImages } from '../../Components/gameArry'
import { useRouter } from 'next/router'
import gameArry from '../../Components/gameArry'
import Loading from '../../Components/Common/Loading'
import Link from 'next/link'
function Game() {
    const router = useRouter()

    const { query } = router.query



    if (query) {
        return <GameInfo id={parseInt(query[1])} />
    }
    else {
        return (<Loading />)
    }
}
const GameInfo = ({ id }) => {
    console.log(id)
    return (
        <>
            <Head>
                <title>Gamehub - Game</title>
            </Head>

            <NavBar />
            <main id="game-page">
                <div className="game-title">
                    <h1>{gameArry[id].gameName}</h1>
                    <div className="flex wrap">
                        <div className="ratings">
                            <div className="stars">
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-regular fa-star"></i>
                            </div>
                            <div className="intiger">
                                4.0
                            </div>
                        </div>

                        <div className="hightlights">
                            <div className='item'>
                                <img loading='lazy' src="/assets/ux/boss-battle.svg" alt="boss-battle" /> Great Boss Battles
                            </div>
                            <div className="item">
                                <img loading='lazy' src="/assets/ux/story-line.svg" alt="story-line" />  Amazing Storytelling
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-warp">

                    <div className="first-section">
                        <div className="slider">
                            {
                                sliderImages.map((item, index) => {
                                    return (
                                        <img loading='lazy' src={`/assets/sliders/${index + 1}.jpg`} key={index} alt="" />
                                    )
                                })
                            }
                        </div>
                        <div className="buying-section">
                            <div className="section">
                                <div className="logo">
                                    <img src={gameArry[id].imgSrc} alt="" />
                                </div>
                                <div className='right'>
                                    <div className="price-wrap">
                                        <div className="discount">{gameArry[id].gameDiscount}</div>
                                        <div className="actule-price">
                                            <p className="price-mrp"><del>{gameArry[id].gameMRP}</del></p>
                                            <p className="price-sell"> {gameArry[id].gamePrice}</p>
                                        </div>
                                    </div>
                                    <Link href={"/cart"}><button className='blue filled'>Buy Now</button></Link>
                                    <Link href={"/cart"}><button className='white outlined'>Add to cart</button></Link>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="game-description">
                        <div className="brief-desc">
                            <h5>
                                Teenage Miles Morales is adjusting to his new home while following in the footsteps of his mentor, Peter Parker, as a new Spider-Man. When a fierce power struggle threatens to destroy his home, Miles must take up the mantle of Spider-Man and own it.
                            </h5>
                            <div className="long-detail">
                                <h6>
                                    Marvel&#39;s Spider-Man: Miles Morales
                                </h6>
                                <p>
                                    Following the events of Marvel&#39;s Spider-Man Remastered, teenager Miles Morales is adjusting to his new home while following in the footsteps of his mentor, Peter Parker, as a new Spider-Man. But when a fierce power struggle threatens to destroy his new home, the aspiring hero realizes that with great power, there must also come great responsibility. To save all of Marvel&#39;s New York, Miles must take up the mantle of Spider-Man and own it.
                                </p>
                                <h6>
                                    Key Features
                                </h6>
                                <div className="bold"> The Rise of Miles Morales</div>
                                <p>Miles Morales discovers explosive powers that set him apart from his mentor, Peter Parker. Master his unique, bio-electric venom blast attacks and covert camouflage power alongside spectacular web-slinging acrobatics, gadgets and skills.</p>
                                <div className="bold">The Rise of Miles Morales</div>
                                <p>Miles Morales discovers explosive powers that set him apart from his mentor, Peter Parker. Master his unique, bio-electric venom blast attacks and covert camouflage power alongside spectacular web-slinging acrobatics, gadgets and skills.</p>
                                <div className="bold">A War for Power</div>
                                <p>A war for control of Marvel&#39;s New York has broken out between a devious energy corporation and a high-tech criminal army. With his new home at the heart of the battle, Miles must learn the cost of becoming a hero and decide what he must sacrifice for the greater good.</p>
                                <div className="bold">A Vibrant New Home</div>
                                <p>Traverse the snowy streets of his new, vibrant, and bustling neighborhood as Miles searches for a sense of belonging. When the lines blur between his personal and crime-fighting lives, he discovers who he can trust, and what it feels like to truly be home.</p>
                            </div>
                        </div>
                        <div className="gamehub-rattings">
                            <div className="section-head">
                                <h4>Epic Player Ratings</h4>
                                <p>Captured from players in the Epic Games ecosystem.</p>
                            </div>
                            <div className="ratting">
                                <div className="int">
                                    4.0
                                </div>
                                <div className="star">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-regular fa-star"></i>
                                </div>
                            </div>
                            <div className="ux-grid">
                                <div className="item">
                                    <img loading='lazy' src="\Assets\UX\boss-battle.svg" alt="" />
                                    <h6>
                                        This game has
                                    </h6>
                                    <h4>
                                        Great Boss Battles
                                    </h4>
                                </div>
                                <div className="item">
                                    <img loading='lazy' src="\Assets\UX\story-line.svg" alt="" />
                                    <h6>
                                        This game has
                                    </h6>
                                    <h4>
                                        Amazing Storytelling
                                    </h4>
                                </div>
                                <div className="item">
                                    <img loading='lazy' src="\Assets\UX\character.svg" alt="" />
                                    <h6>
                                        This game has
                                    </h6>
                                    <h4>
                                        Diverse Characters
                                    </h4>
                                </div>
                                <div className="item">
                                    <img loading='lazy' src="\Assets\UX\beginner-friendly.svg" alt="" />
                                    <h6>
                                        This game is
                                    </h6>
                                    <h4>
                                        Great for Beginners
                                    </h4>
                                </div>
                                <div className="item">
                                    <img loading='lazy' src="\Assets\UX\extremely-fun.svg" alt="" />
                                    <h6>
                                        This game is
                                    </h6>
                                    <h4>
                                        Extremely Fun
                                    </h4>
                                </div>
                                <div className="item">
                                    <img loading='lazy' src="\Assets\UX\recommend.svg" alt="" />
                                    <h6>
                                        This game is
                                    </h6>
                                    <h4>
                                        Highly Recommended
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="specifications">
                            <div className="section-head">
                                <h4>Specifications</h4>
                            </div>
                            <div className="box">
                                <div className="min">
                                    <div className="title">
                                        Minimum
                                    </div>
                                    <div className="item">
                                        <div className='type'>OS</div>
                                        <div className="spec">Windows 7 64-bit or
                                            newer
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className='type'>Processor</div>
                                        <div className="spec">Core 2 Duo 2.4 GHz or
                                            Athlon X2 2.7 GHz
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="type">Memory</div>
                                        <div className="spec"> 4 GB</div>
                                    </div>
                                    <div className="item">
                                        <div className="type">Storage</div>
                                        <div className="spec"> 30 GB</div>
                                    </div>
                                    <div className="item">
                                        <div className="type">Graphics</div>
                                        <div className="spec"> Nvidia GeForce 8800 GT</div>
                                    </div>
                                </div>
                                <div className="rec">
                                    <div className="title">
                                        Recommended
                                    </div>
                                    <div className="item">
                                        <div className='type'>OS</div>
                                        <div className="spec">Windows 8/10 64-bit (latest
                                            Service Pack)
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className='type'>Processor</div>
                                        <div className="spec">Intel Core i5-750,
                                            2.67 GHz / AMD Phenom II X4 965, 3.4 GHz
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="type">Memory</div>
                                        <div className="spec"> 6 GB</div>
                                    </div>
                                    <div className="item">
                                        <div className="type">Storage</div>
                                        <div className="spec"> 30 GB</div>
                                    </div>
                                    <div className="item">
                                        <div className="type">Graphics</div>
                                        <div className="spec"> Nvidia GeForce GTX 660
                                            or ATI Radeon HD 7950</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div >
            </main >
            <Footer />

        </>
    )
}
export default Game