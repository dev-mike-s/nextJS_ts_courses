import Link from 'next/link'

export default function Navigation() {
  return (
    <div>
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <Link href="/">
                    <a class="nav-link">
                        Startseite
                    </a>
                </Link>
            </li>
            <li class="nav-item">
                <Link href="/artikel">
                    <a class="nav-link">
                        Artikel
                    </a>
                </Link>
            </li>
            <li class="nav-item">
                <Link href="/artikel/hose">
                    <a class="nav-link">
                        Hosen
                    </a>
                </Link>
            </li>
            <li class="nav-item">
                <Link href="/artikel/pullover">
                    <a class="nav-link">
                        Pullover
                    </a>
                </Link>
            </li>
        </ul>
    </div>
  )
}
