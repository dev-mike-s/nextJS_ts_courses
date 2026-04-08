// dies ist die Hauptkomponente

import React, {useState} from 'react'
import Header from './components/Header'
import Main from './components/Main'
import './index.css'

function App() {

    let name = "React";
    // Reaktiv = kein Neustart oder Aktualisierung der Webapp nötig.
    // Zahl bleibt constant und ist nur über die Methode veränderbar.
    const [zahl, setZahl] = useState(1);        // default-Wert ist 1. 
    const [karte, setKarte] = useState(false);  // Karte wird main als zusätzliches props mitgegeben.

    return (
        <div className="center container paper">
            <Header name={name}/>
            <div className="row">
                <button onClick={ () => setZahl(zahl+1) }
                        className="btn-success-outline"
                >
                    +1
                </button>
                <button onClick={ () => setKarte(!karte) }
                        className="btn-danger-outline"
                >
                    Karte
                </button>
            </div>
            <Main   nummer={zahl} 
                    inhalt="Guybrush"
                    karte={karte}
            />
            <Main   nummer="2" 
                    inhalt="LeChuck"
                    karte={karte}
            />
            <Main />
        </div>
    );
}

export default App