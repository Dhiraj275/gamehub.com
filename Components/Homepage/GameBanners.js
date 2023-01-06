import React from 'react'

function GameBanners() {
    return (
        <div className="game-banners">
            <div className="banner-card">
                <div className="img-div">
                    <img loading="lazy" src="/assets/cards/free_3.jpg" alt="" />
                </div>
                <div className="detail">
                    <h3>
                        Rocket Leauge
                    </h3>
                    <p>
                        Titanium White Octane. Not available in the Item Shop... until now!
                    </p>
                    <div className="f2p">
                        PLay For Free
                    </div>
                </div>
            </div>
            <div className="banner-card">
                <div className="img-div">
                    <img loading="lazy" src="/assets/cards/free_2.jpg" alt="" />
                </div>
                <div className="detail">
                    <h3>
                        Fall Guys
                    </h3>
                    <p>
                        Pick up Mirabel, Luisa and that one we don&apos;t talk about in the Fall Guys Store.
                    </p>
                    <div className="f2p">
                        PLay For Free
                    </div>
                </div>
            </div>
            <div className="banner-card">
                <div className="img-div">
                    <img loading="lazy" src="/assets/cards/free_1.jpg" alt="" />
                </div>
                <div className="detail">
                    <h3>
                        Fortnite
                    </h3>
                    <p>
                        Basketball star Giannis Antetokounmpo slams his way into the Fortnite Icon Series!
                    </p>
                    <div className="f2p">
                        PLay For Free
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GameBanners