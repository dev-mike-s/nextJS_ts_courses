// app/artikel/loading.tsx

export default function Loading() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '70vh' }}>
            
            <style>{`
                @keyframes spinNext {
                    from { transform: rotateY(0deg); }
                    to { transform: rotateY(360deg); }
                }
                .next-logo-spin {
                    animation: spinNext 3s linear infinite;
                    perspective: 1000px;
                }
            `}</style>
            
            <svg
                className="next-logo-spin mb-4"
                xmlns="http://www.w3.org/2000/svg"
                width="150"
                height="30"
                viewBox="0 0 180 37"
                aria-hidden="true"
            >
                <path
                    fill="currentColor"
                    d="M14 0h1.75l10.5 20.375 1.125 2.125 1.125-2.125L39 0h1.75V37H39V16.625l-.375-.75L30.125 32h-1.25L20.375 15.875l-.375.75V37H14zM47.25 14h20.5v1.75H47.25v8.25h18.25V25H47.25v8.25H69V35H45.5V1.75H69V3.5H47.25zM128 35h-1.75L116.75 16l-1.125-2L114.5 16 105.75 35h-1.75l11-23.75 1.25-2.625L117.5 11.25l11 23.75zM149.25 1.75v33.25H169V37h-21.5V1.75h21.5V3.5zM100.125 1.75l-1.25 2.625L88 28.125l-.375.75L80.125 13H78.5v24h1.75V16.375l.375.75L88.25 32h1.25l9.5-16.125.375-.75V37H101.5V1.75z"
                />
            </svg>
            
            <h3 className="text-secondary">Daten werden geladen...</h3>
        </div>
    );
}