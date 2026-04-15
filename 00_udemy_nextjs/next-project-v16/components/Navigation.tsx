//root/components/Navigation.tsx

/**
 * Client Komponent:
 * 
 */

'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  return (
    <nav>
        <div className="sticky top-0 z-50 bg-red-700 shadow-md p-4">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-4 w-full">

                <Link href="/" className="transition-transform hover:scale-105">
                    <Image
                        src="/bilder/logo.png"
                        alt="logo"
                        width={150}
                        height={60}
                        className="h-auto w-auto"
                        priority
                    />
                </Link>

                <Link href="/warenkorb" className="relative transition-opacity hover:opacity-80">
                    <Image
                        src="/bilder/warenkorb.png"
                        alt="cart"
                        width={35}
                        height={35}
                        priority
                    />
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                        2
                    </span>
                </Link>
            </div>
        </div>
    </nav>
  )
}
