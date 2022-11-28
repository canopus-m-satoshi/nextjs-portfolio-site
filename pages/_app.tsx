import '../styles/globals.css'
// Font Awesomeの設定
import '@fortawesome/fontawesome-svg-core/styles.css'

import { config } from '@fortawesome/fontawesome-svg-core'

import Layout from '../components/layout'
import Transition from '../components/transition'

config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)

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
