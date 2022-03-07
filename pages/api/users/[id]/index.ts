import { User } from "@prisma/client";
import { pick } from "contentlayer/client";
import prisma from "lib/prisma";
import getUserParams from "lib/tools/getUserId";
import sleep from "lib/tools/sleep";
import withMethods from "lib/tools/withMethods";
import { getSession } from "next-auth/react";
import { z } from "zod";

const ModifyBody = z
    .object({ name: z.string(), image: z.string().url() })
    .partial()
    .refine(data => !!Object.keys(data).length, 'At-least one field should be specified.');;

type ModifyBody = z.infer<typeof ModifyBody>;
const DEFAULT_KEYS: (keyof User)[] = [ "id", "bio", "name", "image", "pronouns", "createdAt" ];

export default withMethods({
    GET: async (req, res) => {
        // await sleep(1500)

        const params = await getUserParams(req);
        if (!params) {
            return res.status(401).json({ success: false });
        }

        const data = await prisma.user.findUnique({
            where: { id: params.userId },
        });

        if (data == null) {
            return res.status(404).json({ success: false });
        }

        return res.status(200).json({ 
            success: true, 
            data: pick(data, params.isMe ? [ ...DEFAULT_KEYS, "email", "emailVerified" ] : DEFAULT_KEYS)
        });
    },
    POST: async (req, res) => {
        return res.status(400).json({ success: false });
            
        let userId = req.query.id.toString();
        const session = await getSession({ req });
        if (userId !== "@me" && session?.user?.id !== userId) {
            return res.status(401).json({ success: false });
        }
        
        if (!session?.user) {
            return res.status(401).json({ success: false });
        }

        let body = ModifyBody.safeParse(req.body);
        if (!body.success) {
            // @ts-expect-error
            return res.status(400).json({ ...body.error.format() });
        }

        const user = await prisma.user.update({
            where: { id: session.user.id },
            // @ts-expect-error
            data: body.data,
            select: { id: true, email: true, image: true, name: true }
        });

        res.status(200).json({ success: true, data: user })
    }
})
