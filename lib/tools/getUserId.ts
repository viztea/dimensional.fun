import { NextApiRequest } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

export default async function getUserParams(req: NextApiRequest): Promise<{ userId: string, isMe: boolean, session: Session | null } | null> {
    const id = req.query.id?.toString();
    if (!id) {
        return null;
    }

    const session = await getSession({ req });
    if (id === "@me") {
        if (!session) {
            return null;
        }

        return { userId: session.user.id, session, isMe: true };
    }

    return { session, userId: id, isMe: false };
}