//root/app/api/pullover/route.ts

// NextResponse ist ein Wrapper um die Standard Web-Response

import { pullover } from '@/data/artikel';
import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json(pullover);
}