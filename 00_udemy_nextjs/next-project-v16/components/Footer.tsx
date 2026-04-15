//root/components/Footer.tsx

/**
 * Server Komponente
 * Statischer Footer, Tailwind Flexbox für die Zentrierung
 */

export default function Footer() {
    return (
        <footer className="w-full py-4 bg-white border-t border-gray-200 text-gray-500 text-sm">
            <div className="flex justify-center gap-4">
                <span>🥡 Liefermax</span>
                <span className="hidden sm:inline">|</span>
                <span>📞 0176 878 42030</span>
                <span className="hidden sm:inline">|</span>
                <span>⏱️ Mo-So: 10:00-22:00</span>
            </div>
        </footer>
    )
}