import { withAuth } from "next-auth/middleware";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
    if (req.nextUrl?.pathname?.endsWith("@me")) {
        return withAuth(req, ev);
    }

    return NextResponse.next();
}
