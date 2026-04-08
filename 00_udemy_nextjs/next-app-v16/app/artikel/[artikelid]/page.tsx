// root/app/artikel/[id]/page.tsx

// Einfache dynamische Route (über eine ID):

interface PageProps {
    params: Promise<{
        id: string
    }>;
}

export default async function ArtikelDetail({ params }: PageProps) {

    const resolvedParams = await params;

    return (
        <div>
            <h1>Die ID lautet {resolvedParams.id}</h1>
        </div>
    )
}
