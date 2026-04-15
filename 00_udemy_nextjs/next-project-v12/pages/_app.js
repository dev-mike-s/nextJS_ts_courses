
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../komponenten/Layout'
import '../styles/custom.scss'

// Hauptkomponente
// Layouts werden an die Components-Komponente übergeben, und darin 
// zwischen Nav und Fusszeile ausgegeben. 
function MyApp({ Component, pageProps}) {
    
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp