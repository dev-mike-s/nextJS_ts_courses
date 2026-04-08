//1. legacy - zugehörig unten die Main.defaultprops = {}
//function Main({nummer, inhalt}) 
//2. für neue props muss man diese entgegen nehmen wie parameter ", karte".
function Main({ nummer = 3, inhalt = "Elaine", karte }) {

    return (
        <main className={karte ? 'sub card' : 'main card'}>
            <h3> {nummer}. {inhalt} </h3>
        </main>
    );
}

// wird die Main-Komponente ohne props erstellt, wird dieses Default-Objekt gerendert
// defaultProps ist deprecated => legacy
// JS-Lösung ist: Destructuring mit Default-Werten, wie oben gezeigt.
Main.defaultProps = {
    nummer: 3,
    inhalt: "Elaine",
    karte: false
}

export default Main;