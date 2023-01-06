import React from 'react'
import Footer from '../Components/Common/Footer'
import GameCard from '../Components/Common/GameCard'
import NavBar from '../Components/Common/NavBar'
import gameArry from '../Components/gameArry'

function discover() {
    return (
        <>
            <NavBar />
            <main id="discover">
                <div className="card-wrap wrap">
                    {
                        gameArry.map((item, index) => {
                            return <GameCard key={index} item={item} index={index} />
                        })
                    }
                </div>
            </main>
            <Footer />
        </>
    )
}

export default discover