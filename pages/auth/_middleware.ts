import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import withAuth from "next-auth/middleware";
import fetcher from 'lib/fetcher';
import { Session } from 'next-auth';

export default async function middleware(req: NextRequest, ev: NextFetchEvent) {
    const url = req.nextUrl.clone()
    if (req.nextUrl?.pathname?.endsWith("login")) {
        const session = await fetcher<Session>(`${url.origin}/api/auth/session`);
        if (session?.user) {
            url.pathname = "/users/@me";
            return NextResponse.redirect(url);
        }

        return NextResponse.next();
    }

    return withAuth(req, ev);
}
