import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Footer from '../Components/Common/Footer'
import slugify from '../Components/Common/makeSlug'
import NavBar from '../Components/Common/NavBar'
import gameArry from '../Components/gameArry'

function Search() {
    const [newArray, setNewArray] = useState([])
    useEffect(() => {
        setNewArray(gameArry)
    }, [])
    const handleQueryChange = (e) => {
        var query = e.target.value
        var newArray = gameArry.filter((item) => {
            return item.gameName.toLowerCase().includes(query.toLowerCase())
        })
        setNewArray(newArray)
    }
    return (
        <>
            <NavBar />
            <main id="discover" className='search-page'>
                <div className="search-box">
                    <div className="input-box">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input onChange={handleQueryChange} type="text" placeholder="Search Store" />
                    </div>
                </div>
                {
                    newArray.length ?
                        <div className="card-wrap wrap">
                            <>
                                {
                                    newArray.map((item, index) => {
                                        return <GameCard key={index} item={item} index={index} />
                                    })
                                }
                            </>
                        </div>
                        :
                        <>
                            <div className="no-found">
                                <h4>No Search Result Found</h4>
                            </div>
                        </>
                }

            </main>
        </>
    )
}
const GameCard = ({ item, index }) => {
    return (
        <Link href={`/game/${slugify(item.gameName)}/${index}`} key={index}>
            <div className="game-card" >
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
        </Link>
    )
}

export default Search