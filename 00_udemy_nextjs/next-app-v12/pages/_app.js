//root/pages/_app.js

/* Dies ist die globale Einstiegsdatei (v12). Sie umschließt jede einzelne Seite der App, 
 * ermöglicht globales CSS (Bootstrap) und ein persistentes Layout, das beim Navigieren nicht neu lädt.
 * Sie dient als Brücke, um Daten aus Server-Side-Funktionen (pageProps) -
 * direkt in die jeweils aktive Seite (Component) zu injizieren.
 */

import Layout from '../komponenten/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
    //<Component {...pageProps} />
}

export default MyApp