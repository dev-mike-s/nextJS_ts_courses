/*
 * Komponentenbasiertes CSS Styling:
 * Hier wird eine Wrapper Logik implementiert (Hülle: Ich wrappe die Seite mit dem Layout):
 * 
 * Statt normale props verwendet man das magische React Schlüsselwort 'children', 
 * für spezielle props. Children ist dann auch der Schlüssel und ein React-Element/Array 
 * und dient der Komposition (also Verschachtelung ineinander).
 * ({children}) => destructuring
 */

import styles from '../styles/Layout.module.css'
import Navigation from './Navigation'

export default function Layout({ children }) {

  return (
    <>
        <Navigation />
        <div className={styles.main}>
            {children}
        </div>
    </>
  )
}
