
function HalloWelt() {

    const options = {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
    };

    let string = 'Next.js';
    let time = new Date().toLocaleDateString('en-US', options);
    
    const arrowfunc = () => {
        alert("Pfeil Funktion Test bestanden");
    }

    /* altes JS, alt weil Probleme mit this entstanden: zu wem gehört die Funktion
    const arrowfunc = function () {
        alert("Alte Schreibweise für Arrow Funktion");
    }
    */

    return (
        <>
            <h1>Willkommen zu React</h1>
            <p>Das ist HTML</p>
            <p>Nach React kommt: {string} </p>
            <br></br>
            <button onClick={arrowfunc}>Pfeil Funktion Testen</button>
            <br></br>
            <p>copyright by Fabian Heihoff (virtualdev.de)</p>
            <p> {time} </p>
        </>
    );
}

export default HalloWelt
