import React from 'react'
import Link from "next/link"
import gameArry from '../gameArry'
import slugify from '../Common/makeSlug'
function Features() {
    var slideNo = 1
    setInterval(() => {
        const slider = document.querySelector("#feature-mobile")
        if (slider) {
            slideNo++
            if (slideNo > 5) {
                slider.scrollBy(-slider.scrollWidth, 0)
                slideNo = 1
            }
            else {
                slider.scrollBy(slider.scrollWidth / 5, 0)
            }
        }
    }, 10000)
    return (
        <>
            <section id="feature-mobile">
                {

                    gameArry.slice(2, 7).map((item, index) => {
                        return (
                            <Link key={index} href={`/game/${slugify(item.gameName)}/${gameArry.indexOf(item)}`}>
                                <div key={index} className="feature-item">
                                    <div className="img-div">
                                        <img loading="lazy" id="display-img" src={item.imgSrc} alt="img" />
                                    </div>
                                    <div className="captions">
                                        <div className="child">
                                            <p id="caption-title" className="sub">Buy Now</p>
                                            <p id="caption-detail">
                                                The Gamehub sell is here buy games at the discounted price
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </section>
            <Link href={"/game"}>
                <section id="feature">
                    <div className="main-display">
                        <img id="display-img" src="Assets/features/feature_1.jpg" loading="lazy" alt="img" />
                        <div className="captions">
                            <img id="caption-logo" src="Assets/features/feature_1_logo.png" loading="lazy" alt="img" />
                            <p id="caption-title" className="sub">Buy Now</p>
                            <p id="caption-detail">
                                Spider-Man: Miles Morales is a superhero game based on the popular Marvel Comics character of
                                the same name.
                            </p>
                            <button id="caption-btn">Open</button>
                        </div>
                    </div>
                    <div className="indicators">
                        <div id="indicator-1" className="indicator-item">
                            <div className="progress-bar">
                                <div className="icon-logo">
                                    <img src="Assets/features/feature_1_indi.jpg" loading="lazy" alt="img" />
                                </div>
                                Spider-Man: Miles Morales
                            </div>
                        </div>
                        <div id="indicator-2" className="indicator-item">
                            <div className="progress-bar">
                                <div className="icon-logo">
                                    <img src="Assets/features/feature_2_indi.jpg" loading="lazy" alt="img" />
                                </div>
                                Gamehub Coupons
                            </div>
                        </div>
                        <div id="indicator-3" className="indicator-item">
                            <div className="progress-bar">
                                <div className="icon-logo">
                                    <img src="Assets/features/feature_3_indi.jpg" loading="lazy" alt="img" />
                                </div>
                                Crime boss
                            </div>
                        </div>
                        <div id="indicator-4" className="indicator-item">
                            <div className="progress-bar">
                                <div className="icon-logo">
                                    <img src="Assets/features/feature_4_indi.jpg" loading="lazy" alt="img" />
                                </div>
                                The Callisto Protocols
                            </div>
                        </div>
                        <div id="indicator-5" className="indicator-item">
                            <div className="progress-bar">
                                <div className="icon-logo">
                                    <img src="Assets/features/feature_5_indi.jpg" loading="lazy" alt="img" />
                                </div>
                                Holyday Sell
                            </div>
                        </div>
                    </div>
                </section>
            </Link>

        </>
    )
}

export default Features