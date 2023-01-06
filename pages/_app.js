import { useEffect, useState } from 'react'
import '../styles/globals.css'
import '../styles/game-page.css'
import '../styles/responsive.css'
function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false)

  useEffect(() => {
    setShowChild(true)
  }, [])

  if (!showChild) {
    return null
  }
  return <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
      integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
      crossOrigin="anonymous" referrerPolicy="no-referrer" />

    <Component {...pageProps} />
  </>
}

export default MyApp
