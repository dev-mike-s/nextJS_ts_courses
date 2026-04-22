/**
 * Globale App-Huelle in v12. Laedt Layout und globale Styles fuer alle Seiten.
 */
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../komponenten/Layout'
import '../styles/custom.scss'
function MyApp({ Component, pageProps}) {
    
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp