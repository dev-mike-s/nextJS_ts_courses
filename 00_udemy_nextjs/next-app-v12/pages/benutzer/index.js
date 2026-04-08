//root/pages/benutzer/index.js

import React from 'react'

export default function index({users}) {
  return (
    <div>
        <h1>Liste der Benutzer</h1>
        {users.map((user)=> [
            <h2 key={user.username}>{user.username}</h2>
        ])}
    </div>
  )
}

// SSG z.B. für Kontakt/Impressum  + ISR
// Vorteile: Schnelligkeit, Statisches Webhosting (CDN), 
// wenig API-Aufrufe, Sicherheit
// Nachteile: Inhalte schnell veraltet, Aktualisierung aufwendig,
// Zeitaufwendig

// ISR z.B. für E-Commerce
// ISR Vorteile: Sehr schnell, oft aktuell, große Webseiten
// Nachteile: Erster Seitenaufruf langsam, Inhalt kann veralten
export async function getStaticProps(){
    const antwort = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await antwort.json();
    return {
        props:{
            users
        },
        // IRS
        // revalidate: 300
    }
}

/*
/ SSR z.B. für Artikel/Beiträge
/ Vorteile: Aktualität, Vollautomatisch
/ Nachteile: Nicht jeder Hoster, Langsamer, 
export async function getServerSideProps(){
    const antwort = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await antwort.json();
    return {
        props:{
            users
        }
    }
}
*/