import React from 'react'
import slugify from './makeSlug'
import Link from 'next/link'

const GameCard = ({ item, index }) => {
    return (
        <Link href={`/game/${slugify(item.gameName)}/${index}`} key={index}>
            <div className="game-card">
                <div className="img-div">
                    <img src={item.imgSrc} loading="lazy" alt={item.gameName} />
                </div>
                <p className="type">Base game</p>
                <h5>{item.gameName}</h5>
                <div className="price-wrap">
                    <div className="discount">
                        {item.gameDiscount}
                    </div>
                    <div className="actule-price">
                        <p className="price-mrp"><del>{item.gameMRP}</del></p>
                        <p className="price-sell"> {item.gamePrice}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default GameCard