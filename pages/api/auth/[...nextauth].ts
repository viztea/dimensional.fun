import prisma from "lib/prisma";
import NextAuth, { DefaultUser } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import DiscordProvider from "next-auth/providers/discord";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

declare module 'next-auth' {
    interface Session {
        user?: DefaultUser & {
            id: string;
        };
    }
}

declare module 'next-auth/jwt/types' {
    interface JWT {
        uid: string;
    }
}

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        DiscordProvider({
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
        })
    ],
    callbacks: {
        session: async ({ session, token }) => {
            if (session?.user) {
                session.user.id = token.sub;
            }

            return session;
        },
    },
    session: {
        strategy: 'jwt',
    },
    pages: {
        newUser: "/users/@me",
        signIn: "/auth/login",
        signOut: "/auth/logout"
    },
    theme: {
        colorScheme: "dark",
        brandColor: "#0A75CD",
        logo: "https://www.dimensional.fun/logo-full.png"
    }
})