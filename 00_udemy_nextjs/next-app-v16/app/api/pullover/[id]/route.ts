//root/app/api/pullover/[id]/route.ts

// .find() statt .filter() da find direkt das Objekt liefert, 
// statt ein Array mit einem Element - denn IDs sind eindeutig.
import { pullover } from '@/data/artikel';
import { NextResponse } from 'next/server';

interface RouteProps {
    params: Promise<{ id: string }>;
}

export async function GET(request: Request, { params }: RouteProps) {
    
    const resolvedParams = await params;
    const id = resolvedParams.id;

    const ausgabe = pullover.find(p => p.id === id);

    if (ausgabe) {
        return NextResponse.json(ausgabe);
    } else {
        return NextResponse.json(
            { text: 'ID nicht vorhanden'},
            { status: 404}
        );
    }
}