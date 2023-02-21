import '../styles/globals.scss'
import '../styles/fonts.css'
import '../styles/fonts/MarkOT.woff'
import '../styles/fonts/MarkOT-Bold.woff'
import type { AppProps } from 'next/app'
import React from "react";
import { Provider } from 'react-redux'


function MyApp({ Component, pageProps }: AppProps) {
  return(

      <Component {...pageProps} />
   
  )
}

export default MyApp
