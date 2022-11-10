import Document, {  DocumentProps, Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage
    
        // Run the React rendering logic synchronously
        ctx.renderPage = () =>
          originalRenderPage({
            // Useful for wrapping the whole react tree
            enhanceApp: (App) => App,
            // Useful for wrapping in a per-page basis
            enhanceComponent: (Component) => Component,
          })
    
        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx)
    
        return initialProps
      }

    render() {
        return (
            <Html>
                <Head>
                    {/* <style type="text/css" dangerouslySetInnerHTML={{ __html: this.props.styleTags}}/> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}