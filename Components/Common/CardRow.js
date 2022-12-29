import React from 'react'

function CardRow({ list, title }) {
    return (
        <div className="product-row">
            <h4>
                {title} <i class="fa-solid fa-angle-right"></i>
            </h4>
            <div className="card-wrap">
                {
                    list.map((item, index) => {
                        return (
                            <GameCard key={index} item={item} index={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}
const GameCard = ({ item, index }) => {
    return (
        <div key={index} className="game-card">
            <div className="img-div">
                <img src={item.imgSrc} alt="" />
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
    )
}
export default CardRow