import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import CardRow from '../Components/Common/CardRow'
import NavBar from '../Components/Common/NavBar'
import gameArry from '../Components/gameArry'
import Features from '../Components/Homepage/Features'
import GameBanners from '../Components/Homepage/GameBanners'

export default function Home() {
  return (
    <>
      <Head>
        <title>GameHub</title>
      </Head>

      <body>
        <NavBar />
        <Features />
        <main>
          <CardRow title={"Holiday Sale Spotlight"} list={gameArry.slice(0, 7)} />
          <GameBanners />
          <div className="game-columns-wrap">
            <div className="game-column">
              <div className="head">
                <h5>
                  Top Sellers
                </h5>
                <button className='view-more'>
                  View More
                </button>
              </div>
              {
                gameArry.slice(8, 13).map((item, index) => {
                  return (
                    <div className="game-card-h" key={index}>
                      <img loading='lazy' src={item.imgSrc} alt="" />
                      <div className="detail">
                        <div className="name">{item.gameName}</div>
                        <div className="price">
                          <div className="discount">{item.gameDiscount}</div>
                          <div ><del className="mrp">{item.gameMRP}</del></div>
                          <div className="main-price">{item.gamePrice}</div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="game-column">
              <div className="head">
                <h5>
                  Top Player Rated
                </h5>
                <button className='view-more'>
                  View More
                </button>
              </div>
              {
                gameArry.slice(14, 19).map((item, index) => {
                  return (
                    <div className="game-card-h" key={index}>
                      <img src={item.imgSrc} alt="" />
                      <div className="detail">
                        <div className="name">{item.gameName}</div>
                        <div className="price">
                          <div className="discount">{item.gameDiscount}</div>
                          <div ><del className="mrp">{item.gameMRP}</del></div>
                          <div className="main-price">{item.gamePrice}</div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="game-column">
              <div className="head">
                <h5>
                  Best On Store
                </h5>
                <button className='view-more'>
                  View More
                </button>
              </div>
              {
                gameArry.slice(19, 24).map((item, index) => {
                  return (
                    <div className="game-card-h" key={index}>
                      <img src={item.imgSrc} alt="" />
                      <div className="detail">
                        <div className="name">{item.gameName}</div>
                        <div className="price">
                          <div className="discount">{item.gameDiscount}</div>
                          <div ><del className="mrp">{item.gameMRP}</del></div>
                          <div className="main-price">{item.gamePrice}</div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </main>
        <footer>
          © 2023, Gamehub, Inc. All rights reserved by Cover All Web Solutions. Non-US transactions through Gamehub International.
        </footer>
      </body>


    </>
  )
}
