// root/pages/api/[id].js

// localhost:3000/api/2
// localhost:3000/api/5 => ID nicht vorhanden

import {pullover} from '../../data/artikel'

export default function handler( {query: {id}}, res) {

    const ausgabe = pullover.filter(pullover =>
        pullover.id === id)
        
        if (ausgabe.length > 0 ) {
            res.status(200).json(ausgabe[0])
        } else {
            res.status(404).json( {text: 'ID nicht vorhanden'} )
        }
}