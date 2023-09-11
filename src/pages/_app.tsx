
import type { AppProps } from 'next/app'
import React from "react";
import GlobalStyleKCOM from "../components/_commonStyles/GlobalStyles";


function MyApp({ Component, pageProps }: AppProps) {
  return(

      <>
        <GlobalStyleKCOM />
        <Component  {...pageProps} />
      </>
   
  )
}

export default MyApp
