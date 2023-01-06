import React from 'react'
import Link from "next/link"
function Features() {
    const tempArry = [
        {
            subTitle: "Buy now",
            detail: "Spider-Man: Miles Morales is a superhero game based on the popular Marvel Comics character of the same name.",
            btnTxt: "Buy now"
        },
        {
            subTitle: "Claim Gamehub Coupons now",
            detail: "Don't miss out on these amazing deals and start saving on your gaming purchases today with Gamehub coupons!",
            btnTxt: "Claim Now"
        },
        {
            subTitle: "Buy now",
            detail: "Game Crimeboss is a thrilling online multiplayer game that puts you in the role of a powerful mafia boss.",
            btnTxt: "Buy now"
        },
        {
            subTitle: "Buy Now",
            detail: "The Callisto Protocols is a survival horror game set in a terrifying future.",
            btnTxt: "Buy Now"
        },
        {
            subTitle: "Gamehub holiday sale: Save now!",
            detail: "Don't miss out on Gamehub's holiday sale! Save on all your favorite video games and expansions during this limited-time event. ",
            btnTxt: "Shop Now"
        },

    ]
    return (
        <>
            <section id="feature-mobile">
                {
                    tempArry.map((item, index) => {
                        return (
                            <Link key={index} href={"/game"}>
                                <div key={index} className="feature-item">
                                    <div className="img-div">
                                        <img id="display-img" src={`Assets/features/feature_${index + 1}_indi.jpg`} alt="img" />
                                    </div>
                                    <div className="captions">
                                        <div className="child">
                                            <p id="caption-title" className="sub">{item.subTitle}</p>
                                            <p id="caption-detail">
                                                {item.detail}
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
                        <img id="display-img" src="Assets/features/feature_1.jpg" alt="img" />
                        <div className="captions">
                            <img id="caption-logo" src="Assets/features/feature_1_logo.png" alt="img" />
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
                                    <img src="Assets/features/feature_1_indi.jpg" alt="img" />
                                </div>
                                Spider-Man: Miles Morales
                            </div>
                        </div>
                        <div id="indicator-2" className="indicator-item">
                            <div className="progress-bar">
                                <div className="icon-logo">
                                    <img src="Assets/features/feature_2_indi.jpg" alt="img" />
                                </div>
                                Gamehub Coupons
                            </div>
                        </div>
                        <div id="indicator-3" className="indicator-item">
                            <div className="progress-bar">
                                <div className="icon-logo">
                                    <img src="Assets/features/feature_3_indi.jpg" alt="img" />
                                </div>
                                Crime boss
                            </div>
                        </div>
                        <div id="indicator-4" className="indicator-item">
                            <div className="progress-bar">
                                <div className="icon-logo">
                                    <img src="Assets/features/feature_4_indi.jpg" alt="img" />
                                </div>
                                The Callisto Protocols
                            </div>
                        </div>
                        <div id="indicator-5" className="indicator-item">
                            <div className="progress-bar">
                                <div className="icon-logo">
                                    <img src="Assets/features/feature_5_indi.jpg" alt="img" />
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