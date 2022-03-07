import { transformDocument } from "@prisma/client/runtime";
import prisma from "lib/prisma";
import withMethods from "lib/tools/withMethods";
import { getSession } from "next-auth/react";
import { z } from "zod";

const CreateComment = z.object({
    content: z.string().describe("the content of this comment."),
})

export default withMethods({
    GET: async (req, res) => {
        const post = req.query.post.toString();

        const data = await prisma.comment.findMany({
            where: { postId: post }
        });

        return res.status(200).json({ success: true, data });
    },
    POST: async (req, res) => {
        const session = await getSession({ req });
        if (!session?.user) {
            return res.status(401).json({ success: false });
        }

        const body = CreateComment.safeParse(req.body);
        if (!body.success) {
            // @ts-expect-error
            return res.status(400).json({ success: false, data: body.error.format() })
        }

        const data = await prisma.comment.create({
            data: {
                content: body.data.content!,
                postId: req.query.post.toString(),
                userId: session.user.id
            },
            select: {
                id: true,
                userId: true,
                postId: true,
                content: true,
                createdAt: true,
                reactions: true
            }
        });

        return res.status(200).json({ success: true, data })
    }
});
