import React from 'react'
import GameCard from './GameCard'

function CardRow({ list, title }) {
    return (
        <div className="product-row">
            <h4>
                {title} <i className="fa-solid fa-angle-right"></i>
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

export default CardRow