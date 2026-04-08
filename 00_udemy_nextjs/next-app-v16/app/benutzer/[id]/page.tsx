// root/app/benutzer/[id]/page.tsx

/* Dynamische ID 
 * in next v12: getStaticPaths
 * 
 * Next.js generiert vorab die Seiten (SSG)
 */

interface User {
    id: number;
    username: string;
}

interface PageProps {
    params: Promise<{ id: string}>;    
}

export async function generateStaticParams() {
    const antwort = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: User[] = await antwort.json();
    return users.map((user) => ({
        id: users.toString(),
    }));
}

export default async function EinzelnerBenutzer({ params }: PageProps) {
    const resolvedParams = await params;
    const antwort = await fetch(`https://jsonplaceholder.typicode.com/users/${resolvedParams.id}`);
    const user: User = await antwort.json();
    return (
        <div>
            <h1>Benutzer</h1>
            <h2>{user.username}</h2>
        </div>
    );
}
