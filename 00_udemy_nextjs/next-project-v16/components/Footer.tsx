/**
 * Footer-Komponente fuer v16. Zeigt statische Kontaktinfos im unteren Seitenbereich.
 */
export default function Footer() {
    return (
        <footer className="w-full py-4 bg-white border-t border-gray-200 text-gray-500 text-sm">
            <div className="flex justify-center gap-4">
                <span>ðŸ¥¡ Liefermax</span>
                <span className="hidden sm:inline">|</span>
                <span>ðŸ“ž 0176 878 42030</span>
                <span className="hidden sm:inline">|</span>
                <span>â±ï¸ Mo-So: 10:00-22:00</span>
            </div>
        </footer>
    )
}