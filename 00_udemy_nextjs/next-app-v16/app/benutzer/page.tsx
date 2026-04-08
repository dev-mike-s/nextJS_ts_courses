// root/app/benutzer/page.tsx

//
// antwort fetcht die Daten. Next.js cacht das automatisch (SSG-Style).
// Durch { next: { revalidate: 300 } } haben wir exakt das v12 ISR

interface User {
    id: number,
    username: string,
}

export default async function BenutzerUebersicht() {

    // Als Test für den loading.tsx
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const antwort = await fetch('https://jsonplaceholder.typicode.com/users', {
        next: { revalidate:300 }
    });
    
    const users: User[] = await antwort.json();
    
    return (
        <div>
            <h1>Liste der Benutzer</h1>
            { users.map((user) => (
                <h2 key={user.id}>
                    {user.username}
                </h2>
            ))}
        </div>
  );
}
