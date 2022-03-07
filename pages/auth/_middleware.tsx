import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { withAuth } from "next-auth/middleware";
import { getSession } from 'next-auth/react';

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
    if (req.nextUrl?.pathname?.endsWith("login")) {
        const session = await getSession();
        if (session?.user) {
            const url = req.nextUrl.clone()
            url.pathname = "/users/@me";

            return NextResponse.redirect(url);
        }

        return NextResponse.next();
    }

    return withAuth(req, ev);
}
