import '../styles/globals.css'
// Font Awesomeの設定
import '@fortawesome/fontawesome-svg-core/styles.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'

import Layout from '../components/layout'
import Transition from '../components/transition'

config.autoAddCss = false

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactElement) => page)

  return (
    <Layout>
      {getLayout(
        <Transition>
          <Component {...pageProps} />
        </Transition>,
      )}
    </Layout>
  )
}

export default MyApp
