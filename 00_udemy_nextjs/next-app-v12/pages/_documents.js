// root/pages/_document.js

/* Klassiker in Next.js v12 (Pages Router) für globale HTML-Grundgerüst (html body)
 * Läuft NUR auf dem Server und bereitet die Seite vor dem Abschicken an Browser vor.
 * ctx (Context) weiß alles über den Request (wie HttpContext in C#)
 * Man nutzt getInitialProps hier meistens, um CSS-in-JS serverseitig vorzurendern.
 * Zweck: App hosten ohne Node.js (Apache/Nginx)
 */
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

    static async getInitialProps(ctx) {
        
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="de">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument