import React from 'react'
import Document, {
  Html,
  Main,
  NextScript,
  Head,
  DocumentContext,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

/**
 * Custom page initialization.
 * Add Redux and Theme provider.
 *
 * @returns a custom App component
 */
class TesourosFieisDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      const enhanceApp = (App) => (props) =>
        sheet.collectStyles(<App {...props} />)
      ctx.renderPage = () => originalRenderPage({ enhanceApp })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang="pt">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default TesourosFieisDocument
