import { useState, useEffect } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <>
      {isLoading 
        ? <>loading...</> 
        : <Component {...pageProps} />
      }
    </>
  );
}

export default MyApp