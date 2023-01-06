import React from 'react'
import NavBar from '../Components/Common/NavBar'

function cart() {
    return (
        <>
            <NavBar />
            <main id="cart">
                <div className="heading">
                    <h2>Cart</h2>
                </div>
                <div className="main-cart">
                    <div className="left">
                        <div className="cart-item">
                            <div className="img-box">
                                <img src="https://cdn1.epicgames.com/offer/f696430be718494fac1d6542cfb22542/EGS_MarvelsSpiderManMilesMorales_InsomniacGamesNixxesSoftware_S2_1200x1600-58989e7116de3f70a2ae6ea56ee202c6?h=480&resize=1&w=360" alt="" />
                            </div>
                            <div className="description">
                                <div className="game-card">
                                    <div className="type">
                                        <p class="type">Base game</p>
                                    </div>
                                </div>
                                <h4>
                                    Marvel&#39;s Spider-Man: Miles Morales
                                </h4>
                                <div className="price">
                                    ₹3,299.00
                                </div>
                                <u>Remove</u>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <h4>Games and Apps Summary</h4>
                        <div className="info">
                            <div className="info-left">
                                Price
                            </div>
                            <div className="info-right">
                                ₹3,299.00
                            </div>
                        </div>
                        <div className="info">
                            <div className="info-left">
                                Taxes
                            </div>
                            <div className="info-right light">
                                Calculated at Checkout
                            </div>
                        </div>
                        <hr />
                        <div className="info">
                            <div className="info-left">
                                Subtotal
                            </div>
                            <div className="info-right">
                                <b>₹3,299.00</b>
                            </div>
                        </div>
                        <button className='blue filled'>Check out</button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default cart