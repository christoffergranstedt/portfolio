import { AppProps } from 'next/app'

import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import '@styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col h-screen">
      <Header className="flex-grow-0 h-16 lg:h-32 flex-shrink-0"/>
      <div className="xl:container mx-auto flex-grow w-full">
        <Component {...pageProps} />
      </div>
      <Footer className="flex-grow-0 h-32 flex-shrink-0"/>
    </div>
  ) 
}

export default MyApp