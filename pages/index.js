import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import NavBar from '../Components/Common/NavBar'
import Features from '../Components/Homepage/Features'

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
          <div className="product-row">
            <h4>
              Holiday Sale Spotlight <i class="fa-solid fa-angle-right"></i>
            </h4>
          </div>
        </main>
      </body>


    </>
  )
}
