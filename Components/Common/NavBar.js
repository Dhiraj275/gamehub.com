import Link from 'next/link'
import React from 'react'

function NavBar() {
    return (
        <>
            <div className="nav-bar desktop">
                <div className="left">
                    <Link href={"/"}>
                        <div className="logo">
                            <img src="/Assets/logo-x.png" alt="img" />
                        </div>
                    </Link>
                    <Link href="/search">
                        <div className="search-box">
                            <div className="input-box">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input disabled type="text" placeholder="Search Store" />
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="right">
                    <div className="navi-links">
                        <ul>
                            <li><Link href="/cart"><i class="fa-solid fa-cart-shopping"></i></Link></li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="nav-bar mobile">
                <div className="left">
                    <Link href="/">
                        <div className="logo">
                            <img src="/Assets/logo.png" alt="img" />
                        </div>
                    </Link>

                </div>
                <div className="right">
                    <div className="navi-links">
                        <ul>
                            <li><Link href="/search"><i className="fa-solid fa-magnifying-glass"></i></Link></li>
                            <li><Link href="/cart"><i className="fa-solid fa-cart-shopping"></i></Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default NavBar