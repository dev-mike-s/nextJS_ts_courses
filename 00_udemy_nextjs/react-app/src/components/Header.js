function Header(props) {

    return (
        <header className='header'>
            <h3 style={{
                    color: 'darkgreen',
                    textDecoration: 'underline'
                }}
            >
                Willkommen zu {props.name} und dem inline-Style.
            </h3>
            <h4 style={h4styling}>
                Diese ist Variablen-Styling
            </h4>
        </header>
    );
}

const h4styling = {
    color: 'blue',
    textDecoration: 'underline'
}

export default Header