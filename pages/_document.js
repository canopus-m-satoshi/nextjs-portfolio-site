import { siteMeta } from 'lib/constants'
import { Head, Html, Main, NextScript } from 'next/document'

const { siteLang } = siteMeta

const Document = () => {
  return (
    <Html lang={siteLang}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
export default Document
