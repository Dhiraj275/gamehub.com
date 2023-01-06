import React from 'react'

function NavBar() {
    return (
        <>
            <div className="nav-bar desktop">
                <div className="left">
                    <div className="logo">
                        <img src="/Assets/logo.png" alt="img" />
                    </div>
                    <div className="search-box">
                        <div className="input-box">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search Store" />
                        </div>
                    </div>
                    <div className="navi-links">
                        <ul>
                            <li><a href="#">Discover</a></li>
                            <li><a href="#">Browse</a></li>
                            <li><a href="#">News</a></li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <div className="navi-links">
                        <ul>
                            <li><a href="#">Cart</a></li>
                            <li><a href="#">Wishlist</a></li>
                            <li><a href="#">Profile</a></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="nav-bar mobile">
                <div className="left">
                    <div className="logo">
                        <img src="Assets/logo.png" alt="img" />
                    </div>

                    <div className="navi-links">
                        <ul>
                            <li><a href="#">Discover</a></li>
                            <li><a href="#">Browse</a></li>
                            <li><a href="#">News</a></li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <div className="navi-links">
                        <ul>
                            <li>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </li>
                            <li><a href="#"><i className="fa-solid fa-cart-shopping"></i></a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default NavBar