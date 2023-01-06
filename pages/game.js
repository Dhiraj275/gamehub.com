import Head from 'next/head'
import React from 'react'
import NavBar from '../Components/Common/NavBar'
import { sliderImages } from '../Components/gameArry'

function game() {
    return (
        <>
            <Head>
                <title>Gamehub - Game</title>
            </Head>
            <body>
                <NavBar />
                <main>
                    <div className="game-title">
                        <h1>Marvel&#39;s Spider-Man: Miles Morales</h1>
                        <div className="flex wrap">
                            <div className="ratings">
                                <div className="stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
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
                        <div className="game-description">
                            <div className="slider">
                                {
                                    sliderImages.map((item, index) => {
                                        return (
                                            <img loading='lazy' src={`/assets/sliders/${index + 1}.jpg`} key={index} alt="" />
                                        )
                                    })
                                }
                            </div>
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
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-regular fa-star"></i>
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
                        </div>

                    </div>
                </main>
            </body>
        </>
    )
}

export default game